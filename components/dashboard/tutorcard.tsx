"use client";

import {
  Bot,
  Mic,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const TutorCard = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-[#111827] via-[#141b33] to-[#1b1635] p-8">

      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[100px]" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-4 py-2 text-sm text-violet-300">
            <Sparkles size={16} />
            AI English Tutor
          </div>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Practice English with AI
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-400">
            Have natural conversations, improve pronunciation,
            receive instant grammar corrections and expand your
            vocabulary—all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-gray-300">
              Grammar
            </div>

            <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-gray-300">
              Pronunciation
            </div>

            <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-gray-300">
              Vocabulary
            </div>

            <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-gray-300">
              Conversation
            </div>

          </div>

          <button className="mt-10 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:shadow-2xl hover:shadow-violet-600/30">

            Start Conversation

            <ArrowRight size={20} />

          </button>

        </div>

        {/* Right */}

        <div className="grid w-full max-w-md gap-5">

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20">

                <Bot
                  className="text-violet-400"
                  size={28}
                />

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  AI Tutor
                </p>

                <h3 className="text-xl font-semibold text-white">
                  Ready to Chat
                </h3>

              </div>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl bg-white/[0.05] p-5">

              <MessageCircle
                className="mb-3 text-violet-400"
                size={22}
              />

              <p className="text-sm text-gray-400">
                Conversations
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">
                132
              </h4>

            </div>

            <div className="rounded-2xl bg-white/[0.05] p-5">

              <Mic
                className="mb-3 text-pink-400"
                size={22}
              />

              <p className="text-sm text-gray-400">
                Speaking Score
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">
                94%
              </h4>

            </div>

          </div>

          <div className="rounded-2xl bg-gradient-to-r from-violet-600/20 to-fuchsia-500/20 p-5">

            <p className="text-sm text-gray-300">
              Today's Recommendation
            </p>

            <h4 className="mt-2 text-lg font-semibold text-white">
              Practice ordering coffee at a café.
            </h4>

          </div>

        </div>

      </div>

    </section>
  );
}