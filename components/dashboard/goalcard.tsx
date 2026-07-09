"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Target,
  Sparkles,
} from "lucide-react";

export const GoalCard = () => {
  const progress = 78;

  const radius = 55;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(
        circumference - (progress / 100) * circumference
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [circumference]);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[100px]" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[260px_1fr]">

        {/* LEFT */}

        <div className="flex flex-col items-center">

          <div className="relative">

            <svg
              width="150"
              height="150"
              className="-rotate-90"
            >
              <circle
                cx="75"
                cy="75"
                r={radius}
                stroke="rgba(255,255,255,.08)"
                strokeWidth={stroke}
                fill="none"
              />

              <circle
                cx="75"
                cy="75"
                r={radius}
                stroke="url(#goalGradient)"
                strokeWidth={stroke}
                strokeLinecap="round"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                style={{
                  transition: "stroke-dashoffset 1.2s ease",
                }}
              />

              <defs>
                <linearGradient
                  id="goalGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="#8B5CF6"
                  />

                  <stop
                    offset="100%"
                    stopColor="#EC4899"
                  />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <Target
                className="mb-2 text-violet-400"
                size={24}
              />

              <span className="text-4xl font-bold">
                {progress}%
              </span>

              <span className="text-sm text-gray-400">
                Complete
              </span>

            </div>

          </div>

          <div className="mt-6 text-center">

            <h3 className="text-xl font-semibold">
              Daily Goal
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Almost there!
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-4 py-2 text-sm text-violet-300">
            <Sparkles size={16} />
            Continue Learning
          </div>

          <h2 className="mt-5 text-4xl font-bold">
            Business English
          </h2>

          <p className="mt-3 max-w-xl text-gray-400">
            Improve your communication skills with
            real-world conversations, AI feedback and
            pronunciation practice.
          </p>

          {/* Lesson Info */}

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl bg-white/5 p-5">

              <BookOpen
                className="mb-3 text-violet-400"
                size={24}
              />

              <p className="text-sm text-gray-400">
                Current Lesson
              </p>

              <h4 className="mt-1 text-lg font-semibold">
                Lesson 08
              </h4>

            </div>

            <div className="rounded-2xl bg-white/5 p-5">

              <Clock3
                className="mb-3 text-violet-400"
                size={24}
              />

              <p className="text-sm text-gray-400">
                Remaining
              </p>

              <h4 className="mt-1 text-lg font-semibold">
                12 min
              </h4>

            </div>

            <div className="rounded-2xl bg-white/5 p-5">

              <Sparkles
                className="mb-3 text-yellow-400"
                size={24}
              />

              <p className="text-sm text-gray-400">
                Reward
              </p>

              <h4 className="mt-1 text-lg font-semibold">
                +250 XP
              </h4>

            </div>

          </div>

          {/* Progress */}

          <div className="mt-8">

            <div className="mb-3 flex items-center justify-between">

              <span className="text-gray-400">
                Lesson Progress
              </span>

              <span className="font-semibold">
                78%
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">

              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-1000"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

          <button className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-600/40">

            Continue Lesson

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </section>
  );
}