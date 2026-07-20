"use client";

import {
  Search,
  PlayCircle,
  Clock,
  Star,
  BookOpen,
  Mic,
  MessageCircle,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import router from "next/router";

const categories = [
  "All",
  "Beginner",
  "Grammar",
  "Speaking",
  "Listening",
  "Vocabulary",
];

const lessons = [
  {
    title: "Daily Conversations",
    level: "Beginner",
    progress: 72,
    duration: "12 min",
    xp: 120,
    icon: MessageCircle,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Travel English",
    level: "Intermediate",
    progress: 28,
    duration: "18 min",
    xp: 180,
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Restaurant Practice",
    level: "Beginner",
    progress: 100,
    duration: "10 min",
    xp: 90,
    icon: Mic,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Job Interview",
    level: "Advanced",
    progress: 0,
    duration: "20 min",
    xp: 250,
    icon: Trophy,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Business English",
    level: "Intermediate",
    progress: 55,
    duration: "22 min",
    xp: 200,
    icon: BookOpen,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Listening Challenge",
    level: "Advanced",
    progress: 12,
    duration: "15 min",
    xp: 170,
    icon: Mic,
    color: "from-pink-500 to-purple-600",
  },
];

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">
      <main className="lg:ml-72 min-h-screen p-5 lg:p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        <div>
          <h1 className="text-4xl font-bold">
            Lessons
          </h1>

          <p className="text-gray-400 mt-2">
            Continue your English journey.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search lessons..."
            className="w-full rounded-xl bg-[#111827] border border-white/10 pl-11 pr-4 py-3 outline-none focus:border-purple-500"
          />
        </div>

      </div>

      {/* Continue Card */}

      <div className="mt-10 rounded-3xl overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 p-8 flex flex-col lg:flex-row justify-between items-center">

        <div>

          <p className="uppercase tracking-widest text-sm text-purple-200">
            Continue Learning
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Daily Conversations
          </h2>

          <p className="text-purple-100 mt-3">
            Practice real-life conversations and improve your fluency.
          </p>

          <div className="mt-6 h-3 rounded-full bg-white/20 overflow-hidden w-80">

            <div
              className="h-full bg-white rounded-full"
              style={{ width: "72%" }}
            />

          </div>

          <p className="mt-2 text-sm text-purple-100">
            72% Completed
          </p>

        </div>
        
        <Link
          href="/lessons/chat"
          className="mt-8 lg:mt-0 flex items-center gap-3 rounded-2xl bg-white text-purple-700 px-7 py-4 font-semibold hover:scale-105 transition">
          <PlayCircle />
          Resume
        </Link>

      

      </div>

      {/* Categories */}

      <div className="flex gap-3 mt-10 overflow-auto pb-2">

        {categories.map((item, index) => (

          <button
            key={item}
            className={`px-5 py-2 rounded-full whitespace-nowrap transition
            ${
              index === 0
                ? "bg-purple-600"
                : "bg-[#111827] border border-white/10 hover:border-purple-500"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

      {/* Lesson Grid */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10">

        {lessons.map((lesson) => {

          const Icon = lesson.icon;

          return (

            <div
              key={lesson.title}
              className="rounded-3xl border border-white/10 bg-[#111827] p-6 hover:border-purple-500 transition group"
            >

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${lesson.color}`}
              >
                <Icon size={26} />
              </div>

              <h3 className="text-xl font-semibold mt-6">
                {lesson.title}
              </h3>

              <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">
                {lesson.level}
              </span>

              <div className="flex justify-between text-sm text-gray-400 mt-6">

                <div className="flex items-center gap-2">
                  <Clock size={15} />
                  {lesson.duration}
                </div>

                <div className="flex items-center gap-2">
                  <Star size={15} />
                  {lesson.xp} XP
                </div>

              </div>

              <div className="mt-6 h-2 rounded-full bg-gray-700 overflow-hidden">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{ width: `${lesson.progress}%` }}
                />

              </div>

              <div className="flex justify-between mt-3">

                <span className="text-sm text-gray-400">
                  {lesson.progress}% Completed
                </span>

                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  Open
                </button>

              </div>

            </div>

          );
        })}
      </div>
        </main>
    </div>
  );
}
