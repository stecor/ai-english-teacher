import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
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

    let preferences = await prismadb.userPreferences.findUnique({
      where: {
        userId,
      },
    });

    if (!preferences) {
      preferences = await prismadb.userPreferences.create({
        data: {
          userId,
          nativeLanguage: "Portuguese",
          learningLanguage: "English",
          englishLevel: "BEGINNER",
          learningGoal: "GENERAL_ENGLISH",
          dailyGoalMinutes: 15,
          dailyGoalLessons: 1,
          lessonDifficulty: "ADAPTIVE",
          lessonLengthMinutes: 15,
          lessonType: "MIXED",
          correctionMode: "IMMEDIATE",
          showTranslations: true,
          showGrammarTips: true,
          showPronunciationTips: true,
          speakingPractice: true,
          autoPlayAudio: false,
          speechSpeed: 1,
        },
      });
    }

    return NextResponse.json(preferences);
  } catch (error) {
    console.error("GET PREFERENCES ERROR:", error);

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


export async function PUT(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const preferences = await prismadb.userPreferences.upsert({
      where: {
        userId,
      },

      update: {
        nativeLanguage: body.nativeLanguage,
        learningLanguage: body.learningLanguage,
        englishLevel: body.englishLevel,
        learningGoal: body.learningGoal,
        dailyGoalMinutes: body.dailyGoalMinutes,
        dailyGoalLessons: body.dailyGoalLessons,
        lessonDifficulty: body.lessonDifficulty,
        lessonLengthMinutes: body.lessonLengthMinutes,
        lessonType: body.lessonType,
        correctionMode: body.correctionMode,
        showTranslations: body.showTranslations,
        showGrammarTips: body.showGrammarTips,
        showPronunciationTips: body.showPronunciationTips,
        speakingPractice: body.speakingPractice,
        autoPlayAudio: body.autoPlayAudio,
        speechSpeed: body.speechSpeed,
      },

      create: {
        userId,
        nativeLanguage: body.nativeLanguage,
        learningLanguage: body.learningLanguage,
        englishLevel: body.englishLevel,
        learningGoal: body.learningGoal,
        dailyGoalMinutes: body.dailyGoalMinutes,
        dailyGoalLessons: body.dailyGoalLessons,
        lessonDifficulty: body.lessonDifficulty,
        lessonLengthMinutes: body.lessonLengthMinutes,
        lessonType: body.lessonType,
        correctionMode: body.correctionMode,
        showTranslations: body.showTranslations,
        showGrammarTips: body.showGrammarTips,
        showPronunciationTips: body.showPronunciationTips,
        speakingPractice: body.speakingPractice,
        autoPlayAudio: body.autoPlayAudio,
        speechSpeed: body.speechSpeed,
      },
    });

    return NextResponse.json(preferences);
  } catch (error) {
    console.error("PUT PREFERENCES ERROR:", error);

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