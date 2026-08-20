"use client";

import { useEffect, useState } from "react";

export default function CircularProgress({
  value = 78,
  size = 170,
  strokeWidth = 10,
}) {
  const [progress, setProgress] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += 1;

      if (current >= value) {
        current = value;
        clearInterval(timer);
      }

      setProgress(current);
    }, 15);

    return () => clearInterval(timer);
  }, [value]);

  const offset =
    circumference - (progress / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Glow */}
      <div className="absolute h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />

      <svg
        width={size}
        height={size}
        className="-rotate-90"
      >
        {/* Background Ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,.08)"
          strokeWidth={strokeWidth}
        />

        {/* Progress Ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset .15s linear",
          }}
        />

        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center */}
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-bold">
          {progress}%
        </span>

        <span className="mt-1 text-sm text-gray-400">
          Complete
        </span>
      </div>
    </div>
  );
}