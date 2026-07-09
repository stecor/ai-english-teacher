"use client";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
} from "lucide-react";

interface Lesson {
  id: number;
  title: string;
  category: string;
  progress: number;
  duration: string;
  completed: boolean;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Business Meetings",
    category: "Business English",
    progress: 100,
    duration: "18 min",
    completed: true,
  },
  {
    id: 2,
    title: "Ordering Food",
    category: "Daily Conversation",
    progress: 80,
    duration: "12 min",
    completed: false,
  },
  {
    id: 3,
    title: "Travel at the Airport",
    category: "Travel English",
    progress: 45,
    duration: "15 min",
    completed: false,
  },
];

export const RecentLessons = () =>{
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Recent Lessons
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Continue where you left off
          </p>
        </div>

        <button className="text-sm font-medium text-violet-400 transition hover:text-violet-300">
          View All
        </button>
      </div>

      {/* Lessons */}
      <div className="space-y-5">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15">
                  <BookOpen className="text-violet-400" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {lesson.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {lesson.category}
                  </p>

                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock3 size={14} />
                      {lesson.duration}
                    </div>

                    {lesson.completed && (
                      <div className="flex items-center gap-1 text-green-400">
                        <CheckCircle2 size={14} />
                        Completed
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button className="rounded-xl bg-violet-500/10 p-3 text-violet-300 transition group-hover:bg-violet-500 group-hover:text-white">
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Progress */}
            {!lesson.completed && (
              <>
                <div className="mt-5 flex justify-between text-sm">
                  <span className="text-gray-400">
                    Progress
                  </span>

                  <span className="font-medium text-white">
                    {lesson.progress}%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-700"
                    style={{
                      width: `${lesson.progress}%`,
                    }}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}