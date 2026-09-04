import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import {
  ChatCompletionRequestMessage,
  Configuration,
  OpenAIApi,
} from "openai";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { API_CONTENT } from "@/constants";





const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content: API_CONTENT,
};




export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { message, messages } = body;

    console.log("CONVERSATION BODY:", body);

    const { userId } = auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured" },
        { status: 500 }
      );
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return NextResponse.json(
        { error: "Free trial expired" },
        { status: 403 }
      );
    }

    const formattedMessages: ChatCompletionRequestMessage[] =
      (messages ?? []).map((item: any) => ({
        role: item.role.toLowerCase(),
        content: item.content,
      }));

    // If for some reason messages is empty,
    // still send the current message.
    if (formattedMessages.length === 0 && message) {
      formattedMessages.push({
        role: "user",
        content: message,
      });
    }

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        instructionMessage,
        ...formattedMessages,
      ],
    });

    const assistantText =
      completion.data.choices[0]?.message?.content;

    console.log("AI RESPONSE:", assistantText);

    if (!assistantText) {
      return NextResponse.json(
        {
          error: "OpenAI did not return a response",
        },
        { status: 500 }
      );
    }

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json({
      success: true,
      response: assistantText,
    });

  } catch (error) {
    console.error("🔥 CONVERSATION ERROR:", error);

    return NextResponse.json(
      {
        error: "Conversation failed",
        details:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}

