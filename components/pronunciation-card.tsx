import { Volume2, Mic, Briefcase } from "lucide-react";


  

export const PronunciationCard = () => {

      const progress = 85;

  const radius = 15.5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
  
          
    <div className="relative flex justify-center items-center py-16">

              <div className="absolute w-[430px] h-[430px] rounded-full bg-purple-700/30 blur-[120px]" />

              <div className="relative w-[330px] rounded-[42px] bg-[#090913] border border-purple-500/20 shadow-[0_0_50px_rgba(128,0,255,.35)] overflow-hidden">

                {/* Status */}

                <div className="px-6 py-5 flex justify-between text-sm text-gray-400">
                  <span>12:30</span>
                  <span>3/8</span>
                </div>

                <div className="px-6 pb-3">
                  <div className="bg-[#12111d] rounded-full text-center py-3 font-medium">
                    Job Interview
                  </div>
                </div>

                <div className="space-y-5 px-6 py-5">

                  <div className="bg-[#191725] rounded-2xl p-5 w-fit max-w-[230px]">
                    Can you tell me about yourself?
                  </div>

                  <div className="bg-gradient-to-r from-indigo-700 to-purple-600 rounded-2xl p-5 ml-auto max-w-[240px]">
                    Sure, I have experience in marketing and I'm
                    passionate about creative strategies.
                  </div>

    <div className="relative w-[280px] rounded-3xl overflow-hidden border border-white/10 bg-[#0b1020] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

      {/* Background Glow */}
      <div className="absolute -top-16 -left-10 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative z-10 flex justify-between items-start">
        <div>
          <p className="text-[13px] text-gray-400">Pronunciation</p>

          <h2 className="mt-2 text-3xl font-semibold text-[#3BF37A]">
            Good
          </h2>
        </div>

        {/* Circular Progress */}

      

       <div className="relative h-14 w-14">
  <svg
    className="rotate-[-90deg]"
    viewBox="0 0 36 36"
  >
    <circle
      cx="18"
      cy="18"
      r={radius}
      fill="none"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="2.8"
    />

   <circle
  cx="18"
  cy="18"
  r={radius}
  fill="none"
  stroke="#4ADE80"
  strokeWidth="2.8"
  strokeLinecap="round"
  strokeDasharray={circumference}
  strokeDashoffset={offset}
  className="transition-all duration-1000 ease-out"
/>
  </svg>

  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-sm font-semibold">{progress}%</span>
  </div>
</div>
      </div>

      {/* Waveform */}
      <div className="relative z-10 mt-6 flex items-center justify-center gap-[2px] h-10">
        {[
          4, 8, 12, 7, 16, 26, 12, 5, 20, 30, 10, 7, 16, 24, 9, 5, 14, 7, 3,
          9, 14, 22, 12, 6,
        ].map((height, index) => (
         <span
            key={index}
            className={`rounded-full ${
                index > 7 && index < 15
                ? "bg-[#5B7CFF]"
                : "bg-white/15"
            } animate-wave`}
            style={{
                width: "2px",
                height,
                animationDelay: `${index * 80}ms`,
            }}
            />
        ))}
      </div>

      <p className="relative z-10 mt-6 text-[14px] leading-7 text-gray-300">
        Try to pronounce{" "}
        <span className="text-white">'marketing'</span>
        <br />
        and{" "}
        <span className="text-white">'strategies'</span>{" "}
        more clearly.
      </p>
</div>
      
       <div className="flex justify-center items-center gap-10 py-8">

                  <button className="w-12 h-12 rounded-full bg-[#171529] flex items-center justify-center">
                    <Volume2 size={18} />
                  </button>

                  <button className="w-20 h-20 rounded-full bg-gradient-to-b from-blue-500 to-indigo-700 flex items-center justify-center shadow-xl">
                    <Mic size={34} />
                  </button>

                  <button className="w-12 h-12 rounded-full bg-[#171529] flex items-center justify-center">
                    <Briefcase size={18} />
                  </button>

                </div>
    </div>
    </div>
    </div>
    
  );
}