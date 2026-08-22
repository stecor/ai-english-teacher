import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const preferences = await prismadb.userPreferences.findUnique({
      where: {
        userId,
      },
    });

    if (!preferences) {
      return NextResponse.json(null);
    }

    const safePreferences = JSON.parse(
      JSON.stringify(preferences, (_, value) =>
        typeof value === "bigint" ? Number(value) : value
      )
    );

    return NextResponse.json(safePreferences);
  } catch (error: unknown) {
    console.error("[PREFERENCES_GET]", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message:
          error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}