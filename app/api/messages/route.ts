import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



type MessageRole = "USER" | "ASSISTANT" | "SYSTEM";

interface MessageBody {
  chatId: string;
  role: MessageRole;
  content: string;
}


export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get("chatId");

    if (!chatId) {
      return NextResponse.json(
        { error: "chatId is required" },
        { status: 400 }
      );
    }

    const messages = await prismadb.message.findMany({
      where: {
        chatId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(messages);

  } catch (error) {
    console.error("GET MESSAGES ERROR:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { chatId, role, content } = body;

    console.log("MESSAGE BODY:", body);

    const message = await prismadb.message.create({
      data: {
        id: crypto.randomUUID(),
        chatId,
        role,
        content,
      },
    });

    console.log("MESSAGE SAVED:", message);

    return NextResponse.json(message);
  } catch (error) {
    console.error("SAVE MESSAGE ERROR:", error);

    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}

