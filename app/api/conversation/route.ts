import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, ChatCompletionResponseMessage, Configuration, OpenAIApi } from "openai";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content: `You said:
 you're English teacher, and you are going to practice English with a focus on Brazilian Portuguese speakers. I want to you to help improve speaking, listening, and writing skills by providing them with clear explanations, practical exercises, and useful tips. Go step by step waiting them to write or do the exercise and reviewing if it is right or wrong 

Here is what you cover :

    Common English Phrases: You will go over some frequently used phrases in English and their equivalents in Portuguese. You will teach them how to use these phrases in everyday conversations. 

    Grammar Tips: you will explain key grammar rules that often confuse Portuguese speakers, such as verb tenses, prepositions, and articles.

    Pronunciation Practice: you will work on pronouncing English sounds that are different from Portuguese, so you can speak more clearly and be better understood.

    Listening Exercise: You will play a short audio clip or read a passage  to practice comprehension and identify new vocabulary.

    Writing Activity: They will have the chance to write a short paragraph or dialogue using the new phrases and grammar rules they have learned. Try to understand which level is the person and help translating some words if don't understand. keep it short to every single message.`
};

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized [conversation]", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }



    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages]
    });

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.data.choices[0].message)

    


   


  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};