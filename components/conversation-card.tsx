"use client";

import { Mic, Plus } from "lucide-react";

const waveHeights = [
  6, 12, 18, 10, 24, 36, 20, 14, 30,
  42, 18, 26, 12, 34, 20, 16, 28, 12,
  22, 36, 18, 10, 24, 14, 8
];

export const ConversationCard = () => {
  return (
    <div className="relative w-[320px] h-[650px] rounded-[42px] overflow-hidden border border-violet-500/40 bg-[#090B14] shadow-[0_0_60px_rgba(139,92,246,.18)]">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-violet-700/20 blur-[90px]" />

      {/* Header */}
      <div className="relative flex items-center gap-3 px-6 pt-8">
        <button className="text-white/70 text-lg">←</button>

        <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 p-[2px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#111322] text-xl">
            🌍
          </div>
        </div>

        <div>
          <p className="text-xs text-white/40">Travel</p>
        </div>
      </div>

      {/* Question */}
      <div className="px-6 mt-7">
        <h2 className="text-white text-[22px] leading-8 font-medium">
          What are some must-visit
          <br />
          places in your country?
        </h2>
      </div>

      {/* Reply Bubble */}
      <div className="px-6 mt-8 flex justify-end">
        <div className="max-w-[215px] rounded-3xl rounded-br-lg bg-gradient-to-br from-[#4E46E5] to-[#6D5DF6] px-5 py-4 shadow-lg">
          <p className="text-white text-[15px] leading-6">
            There are many beautiful places,
            but my favorite is the coastline.
          </p>
        </div>
      </div>

      {/* Listening */}
      <div className="mt-12 flex flex-col items-center">

        <div className="flex items-center gap-2 text-sm text-violet-300">
          <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          Listening...
        </div>

        {/* Wave */}
        <div className="mt-8 flex items-center gap-[4px]">

          {waveHeights.map((height, i) => (
            <span
              key={i}
              className="animate-pulse rounded-full bg-gradient-to-t from-violet-400 to-pink-400"
              style={{
                width: "3px",
                height: `${height}px`,
                animationDelay: `${i * 80}ms`,
                animationDuration: "1.2s",
              }}
            />
          ))}

        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-7">

        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl">
          <Plus size={18} />
        </button>

        <button className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[0_0_45px_rgba(139,92,246,.55)] transition hover:scale-105">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#13152A]">
            <Mic className="text-white" size={28} />
          </div>

        </button>

        <div className="w-11" />
      </div>

    </div>
  );
}