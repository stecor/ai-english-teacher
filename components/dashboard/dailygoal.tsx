"use client";

export const DailyGoal = () => {
  const progress = 78;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-white backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Daily Goal</p>
          <h3 className="mt-2 text-2xl font-bold">32 / 40 min</h3>
        </div>

        <div className="rounded-2xl bg-violet-500/20 px-4 py-2 text-sm font-semibold text-violet-300">
          {progress}%
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-400">Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 font-semibold transition hover:scale-[1.02]">
        Continue Learning
      </button>
    </div>
  );
}