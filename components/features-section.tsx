import {
  Mic,
  Plane,
  Briefcase,
  Coffee,
  BookOpen,
  Heart,
  TrendingUp,
  Volume2,
  Zap,
  CheckCircle2,
} from "lucide-react";

 const cards = [
    {
      title: "Travel",
      icon: Plane,
      color: "from-blue-700 to-slate-900",
    },
    {
      title: "Job Interview",
      photo: Briefcase,
      color: "from-zinc-700 to-zinc-900",
    },
    {
      title: "Business",
      photo: TrendingUp,
      color: "from-blue-800 to-indigo-900",
    },
    {
      title: "Daily Life",
      photo: Coffee,
      color: "from-amber-700 to-zinc-900",
    },
    {
      title: "Exam Prep",
      photo: BookOpen,
      color: "from-zinc-600 to-zinc-900",
    },
    {
      title: "Dating",
      photo: Heart,
      color: "from-pink-600 to-purple-900",
    },
  ];

  const stats = [
    {
      title: "Pronunciation",
      value: 85,
      color: "bg-blue-500",
      icon: Volume2,
    },
    {
      title: "Fluency",
      value: 90,
      color: "bg-purple-500",
      icon: Zap,
    },
    {
      title: "Vocabulary",
      value: 86,
      color: "bg-green-500",
      icon: CheckCircle2,
    },
    {
      title: "Grammar",
      value: 82,
      color: "bg-green-400",
      icon: BookOpen,
    },
  ];

export const FeaturesSection = () => {

  return (
    <main className="min-h-screen bg-[#040510] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0B0D25] via-[#090A17] to-[#1a1134] shadow-[0_0_80px_rgba(120,60,255,.15)]">

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="p-10 lg:p-14">

              <h1 className="text-5xl font-bold leading-tight">
                Real Conversations.
                <br />
                Real Progress.
              </h1>

              <p className="mt-5 text-lg text-gray-400 max-w-md">
                Talk about what matters to you in real-life scenarios.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-12">
                {cards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                        <img
                            src="/images/travel.jpg"
                            alt="Travel"
                            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        <div className="absolute bottom-3 left-3">
                            <h3 className="text-white font-medium">Travel</h3>
                        </div>
                    </div>
                    // <div
                    //   key={item.title}
                    //   className={`aspect-square rounded-2xl bg-gradient-to-br ${item.color}
                    //   p-4 flex flex-col justify-between border border-white/10`}
                    // >
                    //   <span className="text-sm">{item.title}</span>

                    //   <Icon className="w-10 h-10 opacity-80" />
                    // </div>
                  );
                })}
              </div>

              <div className="mt-20">
                <h2 className="text-4xl font-bold">
                  Instant Feedback.
                  <br />
                  Every Time You Speak.
                </h2>

                <p className="mt-5 max-w-md text-gray-400">
                  Our AI listens, analyzes, and helps you improve in
                  real-time.
                </p>
              </div>
            </div>

            {/* RIGHT */}

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

                  <div className="rounded-2xl bg-[#14141d] border border-white/5 p-5">

                    <div className="flex justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">
                          Pronunciation
                        </p>

                        <h3 className="text-3xl font-bold text-green-400">
                          Good
                        </h3>
                      </div>

                      <div className="w-16 h-16 rounded-full border-[6px] border-green-400 flex items-center justify-center font-bold">
                        85%
                      </div>
                    </div>

                    <div className="h-10 flex items-center justify-center text-purple-400 tracking-[8px] mt-4">
                      ~~~~~~~~
                    </div>

                    <p className="text-gray-400 mt-4">
                      Try to pronounce "marketing"
                      <br />
                      and "strategies" more clearly.
                    </p>
                  </div>

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

          {/* Bottom Stats */}

          <div className="border-t border-white/10 bg-[#111523]/80 px-8 py-8">

            <div className="grid md:grid-cols-2 gap-5">

              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-[#171B2A] border border-white/5 p-5"
                  >
                    <div className="flex justify-between">

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                          <Icon size={18} />
                        </div>

                        <span>{item.title}</span>
                      </div>

                      <span>{item.value}%</span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10 mt-5 overflow-hidden">
                      <div
                        className={`${item.color} h-full rounded-full`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}