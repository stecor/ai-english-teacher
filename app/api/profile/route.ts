import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    let dbUser = await prismadb.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!dbUser) {
      const clerkUser = await currentUser();

      if (!clerkUser) {
        return NextResponse.json(
          { error: "Clerk user not found" },
          { status: 404 }
        );
      }

      dbUser = await prismadb.user.create({
        data: {
          id: userId,
          firstName: clerkUser.firstName ?? null,
          lastName: clerkUser.lastName ?? null,
          email:
            clerkUser.emailAddresses[0]?.emailAddress ?? null,
          imageUrl: clerkUser.imageUrl ?? null,
        },
      });
    }

    return NextResponse.json(dbUser);
  } catch (error: any) {
    console.error("PROFILE ERROR:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message: error?.message,
        code: error?.code,
      },
      { status: 500 }
    );
  }
}