export default function LanguageCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070A12]">
      {/* Card */}
      <div className="relative w-[360px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 shadow-2xl">

        {/* Top label */}
        <p className="text-white/60 text-sm mb-2">You</p>

        <div className="flex gap-4 items-center justify-between">

          {/* Left content */}
          <div className="flex-1">
            <p className="text-white text-sm leading-relaxed">
              Fue increíble. La comida y la arquitectura son hermosas.
            </p>

            <p className="text-white/50 text-xs mt-2 leading-relaxed">
              It was amazing. The food and architecture are beautiful.
            </p>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                🔊
              </button>
              <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                🎤
              </button>
            </div>
          </div>

          {/* Right score circle */}
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="40"
                cy="40"
                r="34"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="8"
                fill="none"
              />

              {/* Progress circle */}
              <circle
                cx="40"
                cy="40"
                r="34"
                stroke="url(#grad)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="213"
                strokeDashoffset="17"
              />

              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white font-semibold text-lg">92</span>
              <span className="text-green-400 text-xs">Great!</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}