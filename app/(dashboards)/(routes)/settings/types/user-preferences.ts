export interface UserPreferences {
  id: string;
  userId: string;

  // Language
  nativeLanguage: string;
  learningLanguage: string;
  currentLevel: string;

  // Learning
  learningGoal: string | null;
  dailyGoalMinutes: number;
  dailyGoalLessons: number;

  // Lessons
  lessonDifficulty: string;
  lessonLengthMinutes: number;
  lessonType: string;

  // AI Tutor
  correctionMode: string;
  showTranslations: boolean;
  showGrammarTips: boolean;
  showPronunciationTips: boolean;

  // Speaking
  speakingPractice: boolean;
  autoPlayAudio: boolean;
  speechSpeed: number;

  createdAt: string;
  updatedAt: string;
}