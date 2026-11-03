import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { localDate } = await req.json();

    // Validate YYYY-MM-DD
    if (
      typeof localDate !== "string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(localDate) ||
      new Date(`${localDate}T00:00:00Z`)
        .toISOString()
        .slice(0, 10) !== localDate
    ) {
      return NextResponse.json(
        { error: "Invalid date" },
        { status: 400 }
      );
    }

    const progress = await prisma.userProgress.findUnique({
      where: { userId },
    });

    if (!progress) {
      return NextResponse.json(
        { error: "Progress not found" },
        { status: 404 }
      );
    }

    // Already completed today
    if (progress.lastActiveDate === localDate) {
      return NextResponse.json(progress);
    }

    const yesterday = new Date(
      `${localDate}T00:00:00Z`
    );

    yesterday.setUTCDate(yesterday.getUTCDate() - 1);

    const yesterdayString = yesterday
      .toISOString()
      .slice(0, 10);

    const streakDays =
      progress.lastActiveDate === yesterdayString
        ? progress.streakDays + 1
        : 1;

    const updated = await prisma.userProgress.update({
      where: { userId },
      data: {
        streakDays,
        longestStreak: Math.max(
          streakDays,
          progress.longestStreak
        ),
        lastActiveDate: localDate,
      },
    });

    return NextResponse.json(updated);

  } catch (error: any) {
  console.error("ERROR CODE:", error.code);
  console.error("MISSING COLUMN:", error.meta?.column);
  console.error("ERROR:", error.message);

  return NextResponse.json(
    { error: "Failed to load progress" },
    { status: 500 }
  );
}
}