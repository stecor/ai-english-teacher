"use client";

import { useEffect, useState } from "react";
import {
  Bot,
  Check,
  ChevronRight,
  Lightbulb,
  Mic,
  RotateCcw,
  Send,
  Sparkles,
  Volume2,
  
} from "lucide-react";
import { WandSparkles } from 'lucide-react';
import { useUser } from "@clerk/nextjs";

type Stage = "question" | "answering" | "feedback";

const suggestedAnswers = [
  "Fue increíble. La comida y la arquitectura son hermosas.",
  "Me encantó Barcelona. Es una ciudad muy bonita.",
  "El viaje fue fantástico y quiero volver.",
];

type Chat = {
  id: string;
  userId: string;
  title: string | null;
  createdAt: string;
  updatedAt: string;
};


export default function ConversationLessonPage() {
  const [stage, setStage] = useState<Stage>("question");
  const [answer, setAnswer] = useState("");
  const [showTranslation, setShowTranslation] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [score, setScore] = useState(0);
  const { user } = useUser();
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [message, setMessage] = useState("");

  const targetScore = 92;

  

  useEffect(() => {
    if (stage !== "feedback") {
      setScore(0);
      return;
    }

    let currentScore = 0;

    const timer = window.setInterval(() => {
      currentScore += 2;

      if (currentScore >= targetScore) {
        setScore(targetScore);
        window.clearInterval(timer);
      } else {
        setScore(currentScore);
      }
    }, 18);

    return () => window.clearInterval(timer);
  }, [stage]);

  const speak = (text: string, language: string) => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.9;

    window.speechSynthesis.speak(utterance);
  };

  const startRecording = () => {
    setIsListening(true);
    setStage("answering");

    window.setTimeout(() => {
      setAnswer(
        "Fue increíble. La comida y la arquitectura son hermosas."
      );

      setIsListening(false);
    }, 2200);
  };

  const submitAnswer = () => {
    if (!answer.trim()) return;

    setStage("feedback");
  };

  const restart = () => {
    setAnswer("");
    setScore(0);
    setStage("question");
    setIsListening(false);
  };

type Chat = {
  id: string;
  userId: string;
  title: string | null;
  createdAt: string;
  updatedAt: string;
};

const createChat = async (): Promise<Chat | null> => {
  console.log("createChat called");

  if (!user?.id) {
    console.log("NO USER");
    return null;
  }

  console.log("USER ID:", user.id);

  const response = await fetch("/api/chats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: user.id,
      title: "Travel conversation",
    }),
  });

  console.log("CHAT RESPONSE STATUS:", response.status);

  const data = await response.json();

  console.log("CHAT RESPONSE:", data);

  if (!response.ok) {
    console.error("CREATE CHAT FAILED:", data);
    return null;
  }

  return data;
};

const saveMessage = async (
  chatId: string,
  role: "user" | "assistant",
  content: string
) => {
  const response = await fetch("/api/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chatId,
      role,
      content,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to save message");
  }

  return response.json();
};

const handleSend = async () => {
  console.log("HANDLE SEND CALLED");

  if (!message.trim()) {
    console.log("MESSAGE EMPTY");
    return;
  }

  if (!user?.id) {
    console.log("USER NOT READY");
    return;
  }

  console.log("MESSAGE:", message);

  let chat = selectedChat;

  console.log("SELECTED CHAT:", chat);

  if (!chat) {
    console.log("CREATING NEW CHAT");

    const newChat = await createChat();

    console.log("NEW CHAT:", newChat);

    if (!newChat) {
      console.log("CHAT CREATION FAILED");
      return;
    }

    chat = newChat;
    setSelectedChat(newChat);
  }

  console.log("SAVING TO CHAT:", chat.id);

  await saveMessage(chat.id, "user", message);
};
  

  return (
     <main className="lg:ml-72 min-h-screen p-5 lg:p-8">
    {/* // <main className="min-h-screen overflow-hidden bg-[#030817] px-4 py-8 text-white"> */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-30 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />
        <div className="absolute -right-25 top-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -bottom-25 left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col">
        <LessonHeader />

        <div className="flex flex-1 flex-col justify-center py-8">
          <div className="space-y-5">
            <TutorQuestionCard
              showTranslation={showTranslation}
              onToggleTranslation={() =>
                setShowTranslation((current) => !current)
              }
              onSpeak={() =>
                speak(
                  "Hola. ¿Cómo estuvo tu viaje a Barcelona?",
                  "es-ES"
                )
              }
            />

            {stage === "question" && (
              <AnswerPrompt
                answer={answer}
                setAnswer={setAnswer}
                isListening={isListening}
                onRecord={startRecording}
                onSubmit={submitAnswer}
                onSuggestion={(suggestion) => {
                  setAnswer(suggestion);
                  setStage("answering");
                }}
              />
            )}

            {stage === "answering" && (
              <AnswerCard
                answer={answer}
                setAnswer={setAnswer}
                isListening={isListening}
                onRecord={startRecording}
                onSubmit={submitAnswer}
              />
            )}

            {stage === "feedback" && (
              <>
                <FeedbackCard
                  answer={answer}
                  score={score}
                  onListen={() => speak(answer, "es-ES")}
                  onRetry={restart}
                />

                <GrammarFeedback />

                <button
                  type="button"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-500 to-violet-500 px-5 py-4 font-semibold shadow-[0_18px_45px_rgba(59,130,246,0.22)] transition hover:-translate-y-0.5"
                >
                  Continue conversation
                  <ChevronRight
                    size={19}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </>
            )}
          </div>
        </div>

        <LessonProgress />
      </section>
    </main>
  );
}

function LessonHeader() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 pb-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
          Interactive lesson
        </p>

        <h1 className="mt-1 text-xl font-semibold sm:text-2xl">
          Barcelona conversation
        </h1>
      </div>

      <div className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-slate-300">
        3 / 8
      </div>
    </header>
  );
}

function TutorQuestionCard({
  showTranslation,
  onToggleTranslation,
  onSpeak,
}: {
  showTranslation: boolean;
  onToggleTranslation: () => void;
  onSpeak: () => void;
}) {
  return (
    <article className="relative ml-auto w-[94%] overflow-hidden rounded-[26px] border border-violet-400/15 bg-linear-to-br from-[#11152b] via-[#17102c] to-[#0d1023] p-5 shadow-[0_20px_65px_rgba(0,0,0,0.34)] sm:w-[82%] sm:p-6">
      <div className="absolute -right-17.5 -top-17.5 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />

      <div className="relative flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-blue-400 via-violet-500 to-fuchsia-500 shadow-[0_0_25px_rgba(124,58,237,0.5)]">
          <Bot size={21} />
        </div>

        <div>
          <h2 className="text-sm font-semibold">AI Tutor</h2>

          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Online
          </div>
        </div>
      </div>

      <p className="relative mt-5 text-lg font-semibold leading-7 sm:text-xl">
        ¡Hola! ¿Cómo estuvo tu viaje a Barcelona?
      </p>

      {showTranslation && (
        <p className="relative mt-3 max-w-sm text-sm leading-6 text-slate-400">
          Hi! How was your trip to Barcelona?
        </p>
      )}

      <div className="relative mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={onToggleTranslation}
          className="text-xs font-medium text-violet-300 transition hover:text-violet-200"
        >
          {showTranslation ? "Hide translation" : "Show translation"}
        </button>

        <button
          type="button"
          onClick={onSpeak}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600/25 text-violet-200 ring-1 ring-violet-400/20 transition hover:scale-105 hover:bg-violet-600/40"
          aria-label="Listen to AI question"
        >
          <Volume2 size={19} />
        </button>
      </div>
    </article>
  );
}

function AnswerPrompt({
  answer,
  setAnswer,
  isListening,
  onRecord,
  onSubmit,
  onSuggestion,
}: {
  answer: string;
  setAnswer: (value: string) => void;
  isListening: boolean;
  onRecord: () => void;
  onSubmit: () => void;
  onSuggestion: (suggestion: string) => void;
}) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6">
      <div className="flex items-center gap-2">
        <Sparkles size={18} className="text-blue-300" />

        <h2 className="font-semibold">Your turn</h2>
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        Answer in Spanish by typing or holding the microphone.
      </p>

      <div className="mt-5 flex items-end gap-3 rounded-2xl border border-white/10 bg-[#071020] p-2 focus-within:border-blue-400/40">
        <textarea
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          rows={2}
          placeholder="Escribe tu respuesta..."
          className="min-h-15 flex-1 resize-none bg-transparent px-3 py-3 text-sm outline-none placeholder:text-slate-600"
        />

        <button
          type="button"
          onClick={onRecord}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition ${
            isListening
              ? "animate-pulse bg-red-500 text-white"
              : "bg-blue-500/15 text-blue-300 hover:bg-blue-500/25"
          }`}
        >
          <Mic size={20} />
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={!answer.trim()}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-violet-500 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Send size={18} />
        </button>
      </div>

      {isListening && <AudioWave />}

      <div className="mt-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Need an idea?
        </p>

        <div className="space-y-2">
          {suggestedAnswers.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => onSuggestion(suggestion)}
              className="w-full rounded-xl border border-white/10 bg-white/2.5 px-4 py-3 text-left text-sm leading-6 text-slate-300 transition hover:border-blue-400/30 hover:bg-blue-500/[0.07]"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnswerCard({
  answer,
  setAnswer,
  isListening,
  onRecord,
  onSubmit,
}: {
  answer: string;
  setAnswer: (value: string) => void;
  isListening: boolean;
  onRecord: () => void;
  onSubmit: () => void;
}) {
  return (
    <article className="relative w-[96%] overflow-hidden rounded-[27px] border border-blue-400/30 bg-linear-to-br from-[#17478f] via-[#112c62] to-[#08172e] p-5 shadow-[0_24px_70px_rgba(21,91,200,0.24)] sm:w-[84%] sm:p-6">
      <div className="absolute -right-20 -top-10 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />

      <p className="relative text-sm font-medium text-blue-100">You</p>

      <textarea
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        rows={3}
        className="relative mt-3 w-full resize-none bg-transparent text-lg font-medium leading-7 text-white outline-none"
      />

      {isListening && <AudioWave />}

      <div className="relative mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={onRecord}
          className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm text-blue-100 transition hover:bg-white/15"
        >
          <Mic size={17} />
          Record again
        </button>

        <button
          type="button"
          onClick={onSubmit}
          className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-950 transition hover:scale-[1.02]"
        >
          Check answer
          <WandSparkles size={17} />
        </button>
      </div>
    </article>
  );
}

function FeedbackCard({
  answer,
  score,
  onListen,
  onRetry,
}: {
  answer: string;
  score: number;
  onListen: () => void;
  onRetry: () => void;
}) {
  return (
    <article className="relative w-[97%] overflow-visible rounded-[28px] border border-blue-400/30 bg-linear-to-br from-[#17478f] via-[#102d63] to-[#08172d] p-5 pr-20 shadow-[0_24px_75px_rgba(21,91,200,0.26)] sm:w-[86%] sm:p-6 sm:pr-28">
      <p className="text-sm font-medium text-blue-100">You</p>

      <p className="mt-3 text-lg font-medium leading-7 text-white">
        {answer}
      </p>

      <p className="mt-3 text-sm leading-6 text-blue-100/70">
        It was amazing. The food and architecture are beautiful.
      </p>

      <div className="mt-5 flex gap-2">
        <button
          type="button"
          onClick={onListen}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-100 transition hover:bg-white/20"
        >
          <Volume2 size={17} />
        </button>

        <button
          type="button"
          onClick={onRetry}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-100 transition hover:bg-white/20"
        >
          <RotateCcw size={17} />
        </button>
      </div>

      <ScoreRing score={score} />
    </article>
  );
}

function ScoreRing({ score }: { score: number }) {
  const size = 94;
  const strokeWidth = 7;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (score / 100) * circumference;

  return (
    <div className="absolute -right-3 bottom-7 flex h-28 w-23 flex-col items-center justify-center rounded-[25px] border border-white/10 bg-[#0b1832] shadow-2xl sm:-right-7 sm:h-30.5 sm:w-26.5">
      <div className="relative h-19 w-19">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="h-full w-full -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={strokeWidth}
          />

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#score-gradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-300"
          />

          <defs>
            <linearGradient
              id="score-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
          {score}
        </div>
      </div>

      <p className="text-xs font-semibold text-emerald-400">
        Great!
      </p>
    </div>
  );
}

function GrammarFeedback() {
  return (
    <section className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/6 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
          <Check size={17} />
          What you did well
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          Your sentence was clear, natural and used the past tense
          correctly.
        </p>
      </div>

      <div className="rounded-2xl border border-amber-400/15 bg-amber-400/6 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-amber-300">
          <Lightbulb size={17} />
          Improve it
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          Add more detail: “La arquitectura de la ciudad es
          impresionante.”
        </p>
      </div>
    </section>
  );
}

function AudioWave() {
  return (
    <div className="mt-4 flex h-10 items-center justify-center gap-1">
      {Array.from({ length: 22 }).map((_, index) => (
        <span
          key={index}
          className="audio-wave-bar w-1 rounded-full bg-blue-300"
          style={{
            animationDelay: `${index * 55}ms`,
          }}
        />
      ))}
    </div>
  );
}

function LessonProgress() {
  return (
    <footer className="border-t border-white/10 pt-5">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Lesson progress</span>
        <span>38%</span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[38%] rounded-full bg-linear-to-r from-blue-500 to-violet-500" />
      </div>
    </footer>
  );
}