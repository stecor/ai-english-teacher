"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

interface ConversationTopicModalProps {
  open: boolean;
  onClose: () => void;
  onStart: (topic: string) => void;
}

const topics = [
  "Travel",
  "Restaurant",
  "Job interview",
  "Shopping",
  "Dating",
  "Daily conversation",
];

export const ConversationTopicModal = ({
  open,
  onClose,
  onStart,
}: ConversationTopicModalProps) => {
  const [topic, setTopic] = useState("");

  if (!open) return null;

  const handleStart = () => {
    const selectedTopic = topic.trim();

    if (!selectedTopic) return;

    onStart(selectedTopic);

    // Reset for next time
    setTopic("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#13132a] p-6 shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
          <MessageCircle size={22} />
        </div>

        <h2 className="mt-4 text-xl font-semibold text-white">
          What would you like to practice?
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Choose a conversation topic or create your own.
        </p>

        {/* Topics */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {topics.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTopic(item)}
              className={`rounded-xl border px-3 py-3 text-sm transition ${
                topic === item
                  ? "border-purple-500 bg-purple-500/20 text-purple-300"
                  : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Custom topic */}
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleStart();
            }
          }}
          placeholder="Or type your own topic..."
          className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-purple-500"
        />

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-4 py-2 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={!topic.trim()}
            onClick={handleStart}
            className="rounded-xl bg-purple-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Start conversation
          </button>
        </div>

      </div>
    </div>
  );
};