import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { randomUUID } from "crypto";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chats = await prismadb.chat.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return NextResponse.json(chats);
  } catch (error) {
    console.log("[CHATS_GET]", error);

    return NextResponse.json(
      { error: "Could not load conversations" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    console.log("USER ID:", userId);
    console.log("CHAT TITLE:", body.title);

  const chat = await prismadb.chat.create({
  data: {
    id: randomUUID(),
    userId,
    title: body.title || "New conversation",
  },
});

    console.log("CHAT CREATED:", chat);

    return NextResponse.json(chat, { status: 201 });

  } catch (error) {
    console.error("CHAT POST ERROR:", error);

    return NextResponse.json(
      {
        error: "Could not create conversation",
        details:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}