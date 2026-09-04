import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

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
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const chat = await prismadb.chat.create({
      data: {
        userId,
        title: body.title || "New conversation",
      },
    });

    return NextResponse.json(chat);
  } catch (error) {
    console.log("[CHAT_POST]", error);

    return NextResponse.json(
      { error: "Could not create conversation" },
      { status: 500 }
    );
  }
}