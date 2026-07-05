"use client";


   
 import {
  BarChart3,
} from "lucide-react";

 export const ProgressCard =()=> {
  const progress = 72;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (progress / 100) * circumference;

  const weeklyData = [35, 70, 45, 80, 20, 60, 10];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="w-[320px] rounded-[32px] border border-violet-500/30 bg-[#090B16] p-6 text-white shadow-[0_0_40px_rgba(139,92,246,0.15)]">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Progress</h2>

        <button className="rounded-full p-2 text-gray-400 hover:bg-white/5">
          <BarChart3 size={18} />
        </button>
      </div>

      {/* Level */}
      <div className="mt-8">
        <p className="text-xs text-gray-500">Your current level</p>

        <h3 className="mt-2 text-xl font-semibold">
          B2 - Upper Intermediate
        </h3>
      </div>

      {/* Progress */}
      <div className="mt-10">
        <p className="mb-5 text-sm text-gray-400">Progress</p>

        <div className="flex items-center gap-6">
          {/* Circular Progress */}
          <div className="relative flex h-28 w-28 items-center justify-center">

            <svg
              className="-rotate-90"
              width="112"
              height="112"
            >
              {/* Background */}
              <circle
                cx="56"
                cy="56"
                r="45"
                stroke="#23263C"
                strokeWidth="8"
                fill="transparent"
              />

              {/* Progress */}
              <circle
                cx="56"
                cy="56"
                r="45"
                stroke="#7C4DFF"
                strokeWidth="8"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-all duration-700"
              />
            </svg>

            <div className="absolute text-center">
              <p className="text-2xl font-bold">{progress}%</p>
            </div>
          </div>

          {/* Stats */}
          <div>
            <p className="text-3xl font-bold text-green-400">
              +12%
            </p>

            <p className="mt-1 text-xs text-gray-500">
              +12% this week
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Goal */}
      <div className="mt-10">
        <div className="flex items-end justify-between">
          <div>
            <h4 className="font-semibold">
              Weekly Goal
            </h4>

            <p className="text-xs text-gray-500">
              Conversations
            </p>
          </div>

          <span className="text-lg font-semibold">
            4/5
          </span>
        </div>

        {/* Bars */}
        <div className="mt-6 flex h-24 items-end justify-between">
          {weeklyData.map((value, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex h-16 w-2 items-end rounded-full bg-[#1E2135]">
            <div
  style={{ height: `${value}%` }}
  className="w-full origin-bottom animate-[grow_0.8s_ease] rounded-full bg-gradient-to-t from-violet-700 to-violet-400"
/>
              </div>

              <span className="text-[10px] text-gray-500">
                {days[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}