"use client";

import { Clock3, TrendingUp } from "lucide-react";

const weekData = [
  { day: "Mon", minutes: 35 },
  { day: "Tue", minutes: 60 },
  { day: "Wed", minutes: 45 },
  { day: "Thu", minutes: 95 },
  { day: "Fri", minutes: 70 },
  { day: "Sat", minutes: 110 },
  { day: "Sun", minutes: 55 },
];

const max = 120;

export const WeeklyChart = () => {
  const total = weekData.reduce((a, b) => a + b.minutes, 0);
  const average = Math.round(total / weekData.length);

  const labels = [120, 90, 60, 30, 0];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            Weekly Activity
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Learning minutes
          </p>

        </div>

        <div className="rounded-2xl bg-violet-500/10 px-4 py-3">

          <p className="text-xs text-gray-400">
            Weekly Total
          </p>

          <h3 className="text-xl font-bold text-white">
            {total} min
          </h3>

        </div>

      </div>

      {/* Graph */}

      <div className="mt-10 flex">

        {/* Y Axis */}

        <div className="mr-4 flex h-72 flex-col justify-between text-xs text-gray-500">

          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}

        </div>

        {/* Chart */}

        <div className="relative flex-1">

          {/* Grid */}

          <div className="absolute inset-0 flex flex-col justify-between">

            {labels.map((line) => (
              <div
                key={line}
                className="border-t border-white/5"
              />
            ))}

          </div>

          {/* Bars */}

          <div className="relative flex h-72 items-end justify-around">

            {weekData.map((item, index) => (
              <div
                key={item.day}
                className="group flex flex-col items-center"
              >
                <div className="relative flex h-64 items-end">

                  {/* Tooltip */}

                  <div className="absolute -top-10 left-1/2 hidden -translate-x-1/2 rounded-lg bg-[#1A1F35] px-2 py-1 text-xs text-white shadow-lg group-hover:block">
                    {item.minutes} min
                  </div>

                  <div
                    style={{
                      height: `${(item.minutes / max) * 100}%`,
                    }}
                    className={`
                      w-7 rounded-full transition-all duration-300
                      group-hover:w-8 group-hover:brightness-125
                      ${
                        index === 5
                          ? "bg-gradient-to-t from-fuchsia-500 to-violet-500"
                          : "bg-gradient-to-t from-violet-700 to-violet-400"
                      }
                    `}
                  />
                </div>

                <span className="mt-3 text-sm text-gray-400">
                  {item.day}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Bottom Stats */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-white/5 p-4">

          <div className="flex items-center gap-2 text-violet-400">

            <Clock3 size={18} />

            <span className="text-sm">
              Daily Average
            </span>

          </div>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {average} min
          </h3>

        </div>

        <div className="rounded-2xl bg-white/5 p-4">

          <div className="flex items-center gap-2 text-green-400">

            <TrendingUp size={18} />

            <span className="text-sm">
              Weekly Goal
            </span>

          </div>

          <h3 className="mt-2 text-2xl font-bold text-white">
            92%
          </h3>

        </div>

      </div>

    </div>
  );
}