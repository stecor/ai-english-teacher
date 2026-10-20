
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";


export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

   const progress = await prisma.userProgress.upsert({
  where: { userId },
  update: {},
  create: { userId },
});

    return NextResponse.json(progress);
  } 
catch (error) {
  console.error("PROGRESS ERROR:", error);

  return NextResponse.json(
    {
      error: "Internal server error",
      message:
        error instanceof Error
          ? error.message
          : String(error),
    },
    { status: 500 }
  );
}

}
