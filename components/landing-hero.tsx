"use client";

import TypewriterComponent from "typewriter-effect";
//import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import LanguageCard from "./language-card";

import { Button } from "@/components/ui/button";
import Link from "next/link"


import React from "react";
import {
  Mic,
  Globe,
  TrendingUp,
  MessageCircle,
  Star,
  Play,
} from "lucide-react";




export const LandingHero = () => {

  const { isSignedIn } = useAuth();
  return (
    <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] mx-auto w-full max-w-screen-xl "
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* Left — Text content */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 tag-badge text-xs font-semibold px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
            #1 AI Language Learning Platform
          </div>

          {/* Headline */}
          <div className="animate-fade-in-up-2 space-y-1">
            <h1 className="text-4xl xl:text-5xl font-extrabold leading-[1.08] tracking-tight">
              Speak{" "}
              <span style={{ background: "linear-gradient(135deg,#c084fc,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                naturally.
              </span>
            </h1>
            <h1 className="text-4xl xl:text-5xl font-extrabold leading-[1.08] tracking-tight">
              Live the{" "}
              <span style={{ background: "linear-gradient(135deg,#c084fc,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                language.
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="animate-fade-in-up-3 text-gray-400 text-base leading-relaxed max-w-md">
            Practice real conversations with AI that adapts to you. Get instant feedback,
            build confidence, and become fluent faster.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up-4 flex flex-wrap items-center gap-4">
            <Link 
            href="/sign-up"
            className="cta-btn text-white font-semibold px-7 py-3 rounded-full flex items-center gap-2 text-sm">
              Start Learning Free
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
            href="/howtouse"
            className="secondary-btn text-white font-medium px-6 py-3 rounded-full flex items-center gap-2.5 text-sm">
              See how it works
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 ml-0.5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* Social proof */}
          <div className="animate-fade-in-up-4 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {["#a78bfa","#818cf8","#60a5fa","#34d399"].map((color, i) => (
                <div key={i}
                     className="w-9 h-9 rounded-full border-2 border-[#0d0d1a] flex items-center justify-center text-xs font-bold"
                     style={{ background: `linear-gradient(135deg,${color},${color}99)`, zIndex: 4 - i }}>
                  {["A","B","M","S"][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">50,000+ learners</p>
              <p className="text-gray-500 text-xs">from 150+ countries</p>
            </div>
          </div>
        </div>

        {/* Right — Image + overlaid cards */}
        <div className="animate-fade-in-right relative w-full" style={{ height: "520px" }}>

          {/* Glow blob */}
          <div className="absolute inset-0 rounded-3xl opacity-30 blur-3xl pointer-events-none "
               style={{ background: "radial-gradient(circle at 60% 40%,#a855f7,transparent 70%)" }} />

          {/* Image container — fills the bounded box */}
          <div className="relative h-96">
           <div className="absolute inset-0 bg-violet-600 blur-[120px] opacity-20 right-10" />

          <img
            src="./woman.png"
            alt="AI Language student"
            className="absolute top-1/2 left-20 right-1/2 -translate-x-1/2 -translate-y-1/2"
             style={{ filter: "contrast(110%) saturate(90%)" }}
          />

            {/* <img
              src="./woman.png"
              alt="AI Language student"
              className="w-full h-full object-cover object-top"
              style={{ filter: "contrast(110%) saturate(90%)" }}
            /> */}


     
          </div>

          {/* AI Tutor card — top right, overlapping edge */}
          <div className="absolute top-6 right-4 animate-float glass-card rounded-2xl p-4 w-60 shadow-2xl z-10">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center animate-pulse-ring"
                   style={{ background: "linear-gradient(135deg,#a855f7,#6366f1)" }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="white" strokeWidth="2">
                  <path strokeLinecap="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-xs font-semibold">AI Tutor</p>
                <p className="text-green-400 text-[10px] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online
                </p>
              </div>
            </div>
            <div className="rounded-xl rounded-tl-sm p-3 mb-2 text-xs text-gray-200 leading-relaxed"
                 style={{ background: "rgba(255,255,255,0.08)" }}>
              ¡Hola! ¿Cómo estuvo tu viaje a Barcelona?
              <p className="text-gray-500 mt-1 text-[10px]">Hi! How was your trip to Barcelona?</p>
            </div>
            <button className="flex items-center justify-center w-7 h-7 rounded-full ml-auto"
                    style={{ background: "rgba(168,85,247,0.2)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" className="w-3.5 h-3.5">
                <path strokeLinecap="round" d="M15.536 8.464a5 5 0 010 7.072M12 6v12M8.464 8.464a5 5 0 000 7.072"/>
              </svg>
            </button>
          </div>

          {/* User reply card — middle right */}
          <div className="absolute right-4 glass-card rounded-2xl p-4 w-68 shadow-2xl z-10"
               style={{ top: "48%" }}>
            <p className="text-gray-400 text-[10px] font-semibold mb-2 uppercase tracking-wider">You</p>
            <p className="text-white font-bold text-sm leading-snug mb-1">
              Fue increíble. La comida y la arquitectura son hermosas.
            </p>
            <p className="text-gray-500 text-xs mb-3">It was amazing. The food and architecture are beautiful.</p>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(232, 10, 10, 0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" d="M15.536 8.464a5 5 0 010 7.072M12 6v12M8.464 8.464a5 5 0 000 7.072"/>
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(168,85,247,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z"/>
                </svg>
              </button>
            </div>
          </div>

          

          {/* Score badge — bottom right */}
          <div className="absolute bottom-6 right-4 glass-card rounded-2xl p-3 flex items-center gap-3 shadow-2xl z-10">
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 44 44" className="w-12 h-12 -rotate-90">
                <circle cx="22" cy="22" r="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3.5"/>
                <circle cx="22" cy="22" r="20" fill="none" stroke="#22c55e" strokeWidth="3.5"
                        strokeDasharray="126" strokeDashoffset="15"
                        strokeLinecap="round" className="score-circle"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">92</span>
              </div>
            </div>
            <div>
              <p className="text-green-400 font-bold text-sm">Great!</p>
              <p className="text-gray-500 text-[10px]">Pronunciation score</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}






// export const LandingHero = () => {

//   const { isSignedIn } = useAuth();

//   return (
//     <div className="bg-[#050816] text-white min-h-screen font-sans overflow-hidden">
//       {/* Navbar */}
//       <header className="flex items-center justify-between px-10 py-6 border-b border-white/10">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
//           <h1 className="text-2xl font-bold">wiselang</h1>
//         </div>

//         <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
//           <a href="#">Features</a>
//           <a href="#">How it works</a>
//           <a href="#">Pricing</a>
//           <a href="#">Testimonials</a>
//           <a href="#">Blog</a>
//         </nav>

//         <div className="flex items-center gap-4">
//           <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/5">
//             Log in
//           </button>

//           <button className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 font-semibold shadow-lg">
//             Try Wiselang Free
//           </button>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="grid lg:grid-cols-2 gap-0 items-center px-5 py-20">
//         <div>
//           <div className="inline-flex px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-sm text-violet-300 mb-6">
//             #1 AI Language Learning Platform
//           </div>

//           <h1 className="text-6xl leading-tight font-bold">
//             Speak <span className="text-violet-400">naturally.</span>
//             <br />
//             Live the <span className="text-indigo-400">language.</span>
//           </h1>

//           <p className="text-gray-400 mt-8 text-lg max-w-xl">
//             Practice real conversations with AI that adapts to you.
//             Get instant feedback, build confidence, and become fluent faster.
//           </p>

//           <div className="flex gap-5 mt-10">
//             <button className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 font-semibold">
//               Start Learning Free
//             </button>

//             <button className="px-8 py-4 rounded-full border border-white/10 flex items-center gap-3">
//               <Play size={18} />
//               See how it works
//             </button>
//           </div>

//           <div className="flex items-center gap-4 mt-10">
//             <div className="flex -space-x-3">
//               {[1, 2, 3, 4].map((item) => (
//                 <img
//                   key={item}
//                   src={`https://i.pravatar.cc/100?img=${item + 10}`}
//                   className="w-10 h-10 rounded-full border-2 border-[#050816]"
//                   alt=""
//                 />
//               ))}
//             </div>

//             <p className="text-gray-400">
//               <span className="text-white font-semibold">50,000+ learners</span>
//               <br />
//               from 150+ countries
//             </p>
//           </div>
//         </div>

//         {/* Hero Right */}
//         <div className="relative h-96">
//           <div className="absolute inset-0 bg-violet-600 blur-[120px] opacity-20 right-10" />

//           <img
//             src="./woman.png"
//             alt=""
//             className="absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2"
//           />

          

//           {/* Floating Cards */}
//           <div className="absolute top-0  right-0  bg-[#12182b]/90 backdrop-blur-xl border border-white/10 p-6 rounded-3xl w-72 shadow-2xl opacity-75">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
//               <div>
//                 <h3 className="font-semibold">AI Tutor</h3>
//                 <p className="text-xs text-green-400">Online</p>
//               </div>
//             </div>

//             <p className="text-lg">
//               ¡Hola! ¿Cómo estuvo tu viaje a Barcelona?
//             </p>

//             <p className="text-gray-400 mt-3 text-sm">
//               Hi! How was your trip to Barcelona?
//             </p>
//           </div>

//           <div className="absolute bottom-0 right-10 bg-[#12182b]/90 backdrop-blur-xl border border-white/10 p-6 rounded-3xl w-80 shadow-2xl opacity-75">
//             <div className="flex justify-between items-center">
//               <h4 className="text-lg font-semibold">Pronunciation</h4>

//               <div className="w-14 h-14 rounded-full border-4 border-green-400 flex items-center justify-center text-green-400 font-bold">
//                 92
//               </div>
//             </div>

//             <div className="mt-6 h-2 bg-white/10 rounded-full overflow-hidden">
//               <div className="w-[92%] h-full bg-gradient-to-r from-violet-500 to-green-400" />
//             </div>

//             <p className="text-sm text-gray-400 mt-3">
//               Great progress. Keep practicing!
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="px-10 pb-20">
//         <div className="grid md:grid-cols-4 gap-6">
//           {[
//             {
//               icon: <MessageCircle />,
//               title: "AI Conversations",
//               desc: "Talk naturally in real-life scenarios.",
//             },
//             {
//               icon: <Mic />,
//               title: "Instant Feedback",
//               desc: "Improve pronunciation instantly.",
//             },
//             {
//               icon: <TrendingUp />,
//               title: "Track Progress",
//               desc: "Monitor your fluency growth.",
//             },
//             {
//               icon: <Globe />,
//               title: "Practice Anywhere",
//               desc: "Learn on all your devices.",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-violet-500/30 transition"
//             >
//               <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center mb-6">
//                 {item.icon}
//               </div>

//               <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

//               <p className="text-gray-400">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="px-10 pb-28">
//         <div className="bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-white/10 rounded-[40px] p-16">
//           <div className="max-w-3xl mx-auto text-center">
//             <div className="flex justify-center gap-1 text-yellow-400 mb-6">
//               {[1, 2, 3, 4, 5].map((s) => (
//                 <Star key={s} fill="currentColor" />
//               ))}
//             </div>

//             <h2 className="text-5xl font-bold leading-tight">
//               Loved by learners around the world
//             </h2>

//             <p className="text-gray-400 mt-8 text-xl">
//               “Wiselang helped me go from shy to confident in conversations.
//               It feels like having a personal tutor in my pocket.”
//             </p>

//             <div className="mt-10 flex items-center justify-center gap-4">
//               <img
//                 src="https://i.pravatar.cc/100?img=32"
//                 className="w-16 h-16 rounded-full"
//                 alt=""
//               />

//               <div className="text-left">
//                 <h4 className="font-semibold">Maria S.</h4>
//                 <p className="text-gray-400">Spain</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-10 pb-32">
//         <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[40px] p-16 flex flex-col lg:flex-row justify-between items-center">
//           <div>
//             <h2 className="text-5xl font-bold leading-tight">
//               Ready to speak your new language?
//             </h2>

//             <p className="mt-6 text-white/80 text-lg max-w-xl">
//               Join thousands of learners and start your fluency journey today.
//             </p>
//           </div>

//           <button className="mt-10 lg:mt-0 px-10 py-5 rounded-full bg-white text-black font-bold text-lg">
//             Start Learning Free
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }





