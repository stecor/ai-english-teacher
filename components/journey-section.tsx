import {
  Flag,
  Target,
  BrainCircuit,
  MessageSquare,
  Mic,
} from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Set Your Goal",
    desc: "Tell us what you want to achieve.",
  },
  {
    icon: BrainCircuit,
    title: "Practice & Learn",
    desc: "AI creates lessons just for you.",
  },
  {
    icon: MessageSquare,
    title: "Get Feedback",
    desc: "Improve with real-time corrections.",
  },
  {
    icon: Mic,
    title: "Speak Confidently",
    desc: "Use the language naturally in real life.",
  },
];

export const JourneySection=()=> {
  return (
    <section className="relative overflow-hidden bottom-35 rounded-3xl border border-white/10 bg-[#090B18] px-10 py-10">
      {/* Background Glow */}
      <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-purple-600/20 blur-[140px]" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative grid items-center gap-10 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold text-white">
            Your Journey to Fluency
          </h2>

          <p className="mt-3 max-w-sm text-lg text-gray-400">
            Step by step, we guide you to speak with confidence.
          </p>

          <div className="mt-12 space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/40 bg-white/5">
                    <Icon
                      className="text-purple-400"
                      size={20}
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex h-[520px] items-center justify-center">
          {/* Mountain */}
          
       

       
          <img src="./montain.png" alt="" className="absolute w-full h-full"/>
         
           
        </div>
      </div>
    </section>
  );
}