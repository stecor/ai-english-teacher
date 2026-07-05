"use client";

import {
  ChevronLeft,
  RotateCcw,
  Volume2,
  Zap,
  BookOpen,
  CheckCircle2,
} from "lucide-react";


import { useEffect, useState } from "react";

const scores = [
  {
    icon: Volume2,
    title: "Pronunciation",
    score: 95,
    color: "text-green-400",
  },
  {
    icon: Zap,
    title: "Fluency",
    score: 90,
    color: "text-lime-400",
  },
  {
    icon: BookOpen,
    title: "Vocabulary",
    score: 88,
    color: "text-emerald-400",
  },
  {
    icon: CheckCircle2,
    title: "Grammar",
    score: 86,
    color: "text-green-300",
  },
];

export const FeedbackCard = () => {

const progress = 92;
const radius = 72;
const circumference = 2 * Math.PI * radius;


// Start with an empty ring
const [offset, setOffset] = useState(circumference);
const [displayValue, setDisplayValue] = useState(0);

useEffect(() => {
  const timer = setTimeout(() => {
    setOffset(circumference - (progress / 100) * circumference);
  }, 150);

  return () => clearTimeout(timer);
}, [circumference, progress]);

// Start with progress 0
 useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;

      if (start >= progress) {
        start = progress;
        clearInterval(interval);
      }

      setDisplayValue(start);
    }, 15); // speed (lower = faster)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[320px] h-[650px] rounded-[42px] overflow-hidden border border-violet-500/30 bg-[#090B14] shadow-[0_0_60px_rgba(139,92,246,.18)]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-12 h-60 w-60 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[110px]" />

      {/* Header */}
      <div className="relative flex items-center justify-between px-6 pt-8">
        <ChevronLeft className="text-white/70" size={22} />

        <h2 className="text-sm font-medium text-white">
          Feedback
        </h2>

        <RotateCcw className="text-white/60" size={18} />
      </div>

      {/* Circle */}
      <div className="relative mt-10 flex justify-center">

        <svg width="180" height="180" className="-rotate-90">

          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="rgba(255,255,255,.08)"
            strokeWidth="10"
            fill="none"
          />

        <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#52f28c"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-[1800ms] ease-out"
          />

        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <span className="text-5xl font-bold text-white">
              {displayValue}
          </span>

          <span className="mt-2 text-lg font-semibold text-green-400">
            Excellent!
          </span>

        </div>

      </div>

      {/* Description */}

      <div className="mt-5 px-8 text-center">
        <p className="text-[15px] leading-6 text-gray-400">
          You did a great job!
          Keep practicing to sound even
          more natural.
        </p>
      </div>

      {/* Divider */}

      <div className="mx-8 mt-8 border-t border-white/10" />

      {/* Score List */}

      <div className="mt-6 space-y-5 px-8">

        {scores.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Icon
                    size={17}
                    className={item.color}
                  />
                </div>

                <span className="text-[15px] text-gray-300">
                  {item.title}
                </span>

              </div>

              <span className="font-medium text-white">
                {item.score}%
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom Glow */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-700/10 to-transparent" />
    </div>
  );
}