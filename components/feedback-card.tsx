"use client";


    export const FeedbackCard =()=> {
  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 p-5 w-[320px] backdrop-blur-xl">

      <div className="flex items-center justify-between">
        <h2 className="text-sm text-white/70">Feedback</h2>
        <span className="text-white/40">⋯</span>
      </div>

      {/* Score circle */}
      <div className="flex flex-col items-center justify-center mt-6">
        <div className="text-5xl font-bold text-green-400">92</div>
        <div className="text-sm text-green-300">Excellent!</div>

        <p className="text-xs text-white/50 text-center mt-3">
          You did a great job! Keep practicing to sound even more natural.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-6 space-y-3 text-sm">
        {[
          ["Pronunciation", "95%"],
          ["Fluency", "90%"],
          ["Vocabulary", "88%"],
          ["Grammar", "85%"],
        ].map(([label, value], i) => (
          <div key={i} className="flex justify-between text-white/70">
            <span>{label}</span>
            <span className="text-white">{value}</span>
          </div>
        ))}
      </div>

    </div>
  );
}