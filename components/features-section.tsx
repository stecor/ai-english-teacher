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

import {PronunciationCard} from "@/components/pronunciation-card"

 const cards = [
    {
      title: "Travel",
      photo: "../images/travel.png",
      color: "from-blue-700 to-slate-900",
    },
    {
      title: "Job Interview",
      photo: "../images/job.png",
      color: "from-zinc-700 to-zinc-900",
    },
    {
      title: "Business",
      photo: "../images/business.png",
      color: "from-blue-800 to-indigo-900",
    },
    {
      title: "Daily Life",
      photo: "../images/life.png",
      color: "from-amber-700 to-zinc-900",
    },
    {
      title: "Exam Prep",
      photo: "../images/study.png",
      color: "from-zinc-600 to-zinc-900",
    },
    {
      title: "Dating",
      photo: "../images/date.png",
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
                  

                  return (
               <div
                  key={item.title}
                  className={`relative aspect-square overflow-hidden rounded-2xl border border-white/10`}
                >
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30" />

                  <span className="absolute top-4 left-4 z-10 text-sm text-white">
                    {item.title}
                  </span>
                </div>
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
            <div className="relative min-h-screen flex items-center justify-center bg-[#050816]">
  <div className="absolute -top-40 left-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px]" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[150px]" />

   {/* Pronunciation card */}

                <PronunciationCard/>
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