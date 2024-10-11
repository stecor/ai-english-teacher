
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, ChatCompletionResponseMessage, Configuration, OpenAIApi } from "openai";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { API_CONTENT } from "@/constants";
import toast from "react-hot-toast";



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

<<<<<<< HEAD
export async function getServerSideProps(context:any) {
  const { req } = context;
  const fullUrl = req.headers.host + req.url;  // Get full URL from request headers
  alert({ props: { fullUrl } }) ;
}



=======
>>>>>>> c40de51 (first commit)


const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content: API_CONTENT
};

<<<<<<< HEAD

export async function POST(
  req: Request
) {


=======
export async function POST(
  req: Request
) {
>>>>>>> c40de51 (first commit)
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