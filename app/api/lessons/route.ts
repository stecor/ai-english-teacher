import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";


// ==========================================
// GET - LOAD LESSONS
// ==========================================

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const lessons = await prismadb.lesson.findMany({
      where: {
        userId,
      },

      orderBy: {
        updatedAt: "desc",
      },
    });
    
    return NextResponse.json(lessons);

  } catch (error) {
    console.error("[LESSONS_GET]", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}


// ==========================================
// POST - CREATE / SAVE LESSON
// ==========================================

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

    const {
      title,
      description,
      category,
      level,
      status,
      progress,
      completed,
    } = body;

    if (!title) {
      return NextResponse.json(
        { error: "Lesson title is required" },
        { status: 400 }
      );
    }

    const lesson = await prismadb.lesson.create({
      data: {
        userId,

        title,
        description: description ?? null,
        category: category ?? null,

        level: level ?? "BEGINNER",
        status: status ?? "NOT_STARTED",

        progress: progress ?? 0,
        completed: completed ?? false,
      },
    });

    return NextResponse.json(
      lesson,
      { status: 201 }
    );

  } catch (error) {
    console.error("[LESSONS_POST]", error);

    return NextResponse.json(
      {
        error: "Could not create lesson",
        message:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}


// ==========================================
// PATCH - UPDATE LESSON
// ==========================================

export async function PATCH(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const {
      id,
      title,
      description,
      category,
      level,
      status,
      progress,
      completed,
    } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Lesson id is required" },
        { status: 400 }
      );
    }

    // Make sure the lesson belongs to this user
    const existingLesson =
      await prismadb.lesson.findFirst({
        where: {
          id,
          userId,
        },
      });

    if (!existingLesson) {
      return NextResponse.json(
        { error: "Lesson not found" },
        { status: 404 }
      );
    }

    const lesson = await prismadb.lesson.update({
      where: {
        id,
      },

      data: {
        ...(title !== undefined && { title }),

        ...(description !== undefined && {
          description,
        }),

        ...(category !== undefined && {
          category,
        }),

        ...(level !== undefined && {
          level,
        }),

        ...(status !== undefined && {
          status,
        }),

        ...(progress !== undefined && {
          progress,
        }),

        ...(completed !== undefined && {
          completed,
        }),
      },
    });

    return NextResponse.json(lesson);

  } catch (error) {
    console.error("[LESSONS_PATCH]", error);

    return NextResponse.json(
      {
        error: "Could not update lesson",
        message:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}


// ==========================================
// DELETE - DELETE LESSON
// ==========================================

export async function DELETE(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Lesson id is required" },
        { status: 400 }
      );
    }

    const lesson = await prismadb.lesson.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!lesson) {
      return NextResponse.json(
        { error: "Lesson not found" },
        { status: 404 }
      );
    }

    await prismadb.lesson.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("[LESSONS_DELETE]", error);

    return NextResponse.json(
      {
        error: "Could not delete lesson",
        message:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}