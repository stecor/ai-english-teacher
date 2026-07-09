"use client";

import {
  Bell,
  Search,
  Flame,
  Calendar,
  ChevronDown,
} from "lucide-react";

export const Header = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex flex-col gap-6">

      {/* Top Row */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div>
          <p className="text-sm text-gray-400">
            {today}
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Welcome back,
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              {" "}Stefano
            </span>
            👋
          </h1>

          <p className="mt-2 text-gray-400">
            Continue learning English with your AI tutor.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="hidden md:flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search lessons..."
              className="w-56 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Notification */}
          <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">

            <Bell size={20} />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-pink-500"></span>

          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 font-bold">
              S
            </div>

            <ChevronDown
              size={18}
              className="text-gray-400"
            />

          </button>

        </div>
      </div>

      {/* Streak Card */}
      <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-600/20 via-purple-600/10 to-fuchsia-600/20 p-6 backdrop-blur-xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/20">
                <Flame
                  className="text-orange-400"
                  size={28}
                />
              </div>

              <div>

                <p className="text-sm text-gray-300">
                  Current Streak
                </p>

                <h2 className="text-3xl font-bold">
                  24 Days 🔥
                </h2>

              </div>

            </div>

            <p className="mt-5 max-w-xl text-gray-400">
              You're doing amazing! Complete today's lesson to
              keep your streak alive and earn bonus XP.
            </p>

          </div>

          {/* Right Side */}
          <div className="flex gap-4">

            {/* XP */}
            <div className="rounded-2xl bg-white/5 px-6 py-5 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                XP
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                18,420
              </h3>

            </div>

            {/* Minutes */}
            <div className="rounded-2xl bg-white/5 px-6 py-5 backdrop-blur-xl">

              <div className="flex items-center gap-2">

                <Calendar
                  size={16}
                  className="text-violet-400"
                />

                <span className="text-sm text-gray-400">
                  Today
                </span>

              </div>

              <h3 className="mt-2 text-2xl font-bold">
                32 min
              </h3>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}