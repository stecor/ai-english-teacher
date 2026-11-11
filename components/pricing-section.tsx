
"use client";

import Link from "next/link";
import {
  Check,
  X,
  Crown,
  Rocket,
  Ban,
  Star,
  Play,
  ArrowRight,
} from "lucide-react";

const freeFeatures = [
  { text: "Access to core lessons", included: true },
  { text: "Limited daily use (20 exercises/day)", included: true },
  { text: "Includes ads", included: true },
  { text: "Unlimited practice", included: false },
  { text: "Advanced learning features", included: false },
  { text: "Priority support", included: false },
];

const proFeatures = [
  "Unlimited practice and lessons",
  "Ad-free learning",
  "Personalized study plans",
  "Advanced progress insights",
  "All learning features",
  "Priority support",
];

export const PricingPage = () => {
  return (
    // <div className="relative min-h-screen w-full overflow-hidden bg-[#09091f] text-white">
    <div>
      {/* Navbar */}
      {/* <header className="relative z-10 border-b border-white/5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <span className="text-purple-400">◉</span>
            WiseLang
          </Link>

          <div className="hidden items-center gap-10 text-sm text-slate-300 md:flex">
            <Link href="/#features" className="transition hover:text-purple-400">
              Features
            </Link>
            <Link href="/#languages" className="transition hover:text-purple-400">
              Languages
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl bg-purple-500/20 px-5 py-3 font-medium text-purple-300"
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="hidden text-sm transition hover:text-purple-400 sm:block"
            >
              Log in
            </Link>
            <Link
              href="/sign-up"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-600/20 transition hover:from-purple-500 hover:to-violet-500"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header> */}

      <main className="relative z-10 mx-auto flex min-h-[calc(100dvh-72px)] w-full flex-col px-6 py-0 lg:px-0">
        {/* Heading */}
        <div className="mb-3 text-center">


  <h1 className="mt-0 text-sm font-extrabold tracking-tight lg:text-3xl">
    Learn languages{" "}
    <span className="bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
      your way
    </span>
  </h1>

  <p className="mt-2 text-sm text-slate-400">
    Choose the plan that fits your learning goals.
  </p>
</div>

        {/* Pricing cards */}
        <div className="grid items-stretch gap-8 md:grid-cols-2">
          {/* FREE PLAN */}
          <div className="flex flex-col rounded-2xl border border-slate-600/60 bg-[#12142c]/90 p-5 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold">Free</h1>
                <p className="mt-3 text-slate-400">
                  Learn languages at no cost.
                </p>
              </div>

              <div className="relative rounded-2xl bg-purple-500/10 p-4 text-purple-400">
                <Play size={36} />
                <span className="absolute -bottom-2 -right-2 rotate-12 rounded-lg bg-purple-600 px-2 py-1 text-xs font-bold text-white">
                  Ad
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold">$0</span>
              <span className="text-slate-400">/month</span>
            </div>

            <div className="my-2 h-px bg-white/10" />

            <ul className="flex-1 space-y-2">
              {freeFeatures.map((feature) => (
                <li key={feature.text} className="flex items-start gap-4">
                  {feature.included ? (
                    <Check
                      size={22}
                      className="mt-0.5 shrink-0 text-purple-400"
                    />
                  ) : (
                    <X
                      size={22}
                      className="mt-0.5 shrink-0 text-slate-500"
                    />
                  )}

                  <span
                    className={
                      feature.included
                        ? "text-slate-200"
                        : "text-slate-500"
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/sign-up"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-500/50 bg-slate-700/40 px-6 py-2 font-semibold transition hover:bg-slate-700/70"
            >
              Get Started Free
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* PRO PLAN */}
          <div className="relative flex flex-col rounded-2xl border-2 border-purple-500 bg-gradient-to-b from-[#21183e] via-[#17132f] to-[#101027] p-5 shadow-[0_0_55px_rgba(139,92,246,0.13)]">
            {/* Most popular */}
            <div className="absolute -top-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-purple-500/30">
              <Crown size={18} fill="currentColor" />
              Most Popular
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold">Pro</h1>
                <p className="mt-3 text-slate-300">
                  Unlock the full WiseLang experience.
                </p>
              </div>

              <Crown
                size={56}
                strokeWidth={1.5}
                className="shrink-0 text-purple-400"
              />
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold">$9.99</span>
              <span className="text-slate-400">/month</span>
            </div>

            <div className="my-4 h-px bg-purple-400/20" />

            <ul className="flex-1 space-y-2">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-4">
                  <Check
                    size={22}
                    className="mt-0.5 shrink-0 text-purple-400"
                  />
                  <span className="text-slate-100">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/sign-up"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-2 font-bold shadow-lg shadow-purple-600/20 transition hover:from-purple-500 hover:to-violet-500"
            >
              Get Pro
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Benefits */}
        {/* <div className="mt-6 grid gap-12 text-center md:grid-cols-3">
          <div className="flex flex-col items-center">
            <Rocket
              size={42}
              strokeWidth={1.7}
              className="text-purple-400"
            />
            <h3 className="mt-4 text-xl font-bold">Learn faster</h3>
            <p className="mt-2 max-w-xs text-slate-400">
              Practice more, with no limits on Pro.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Ban
              size={42}
              strokeWidth={1.7}
              className="text-purple-400"
            />
            <h3 className="mt-4 text-xl font-bold">No ads on Pro</h3>
            <p className="mt-2 max-w-xs text-slate-400">
              Stay focused without interruptions.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Star
              size={42}
              strokeWidth={1.7}
              className="text-purple-400"
            />
            <h3 className="mt-4 text-xl font-bold">More features</h3>
            <p className="mt-2 max-w-xs text-slate-400">
              Personalized learning, progress tracking, and more.
            </p>
          </div>
        </div> */}

              {/* Footer */}
              {/* <div className="mt-5 border-t border-white/10 pt-3 text-center text-xs text-slate-500">
                  © {new Date().getFullYear()} WiseLang. All rights reserved.
              </div> */}
          </main>
      </div>
  );
}
