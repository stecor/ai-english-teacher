"use client";

import React, { useState } from 'react';



// Sample Testimonials data array mirroring image_563520.png style
const TESTIMONIALS_DATA = [
  {
    id: 1,
    text: "Wiselang helped me go from shy to confident in conversations. It feels like having a personal tutor in my pocket.",
     name: "Alex M.",
    country: "Africa",
    avatar: "../images/alex.png"
  },
  {
    id: 2,
    text: "The real-time interactive mapping and immersive speech tracks made it incredibly easy to progress daily.",
    name: "Maria S.",
    country: "Spain",
    avatar: "../images/maria.png" 
  },
  {
    id: 3,
    text: "I love practicing dialects with native-sounding feedback loops. My accent improved significantly within weeks.",
    name: "Yuki T.",
    country: "East Asia",
    avatar: "../images/yuki.png"
  },
  {
    id: 4,
    text: "Consistent active practice and engaging with real-time feedback, is widely recognized as the most effective method for dialect acquisition.",
    name: "James K.",
    country: "Australia",
    avatar: "../images/james.png"
  },
  {
    id: 5,
    text: "Study daily combined with real-time feedback is universally considered the cornerstone of effective learn language ",
    name: "Gina C.",
    country: "United States",
    avatar: "../images/gina.png"
  },
  {
    id: 6,
    text: "Study with AI inteaction is the most effective way to learn a language ",
    name: "Paulo J.",
    country: "Brazil",
    avatar: "../images/paulo.png"
  }
];


export const TestimonialsSection = () => {

  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <div className="bg-[#0b0c16] text-white font-sans min-h-screen flex items-center justify-center p-6 overflow-hidden">
      
      {/* Main Section Layout Container */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
        
        {/* Left Side Column: Copy & Interactive Testimonial Card */}
        <div className="w-full lg:w-5/12 z-10 flex flex-col justify-between space-y-8">
          
          {/* Header Typography and Avatar Bubble Pile */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight max-w-sm">
              Loved by Learners <br /> Around the World
            </h2>
            
            {/* Stacked User Avatars Pile */}
            <div className="flex items-center -space-x-3">
              {TESTIMONIALS_DATA.map((t, idx) => (
                <img 
                  key={t.id}
                  className={`w-12 h-12 rounded-full border-2 border-slate-700 object-cover ring-2 ring-sky-400/30 transition-transform ${currentIndex === idx ? 'scale-110 z-20 border-sky-400' : 'z-10'}`} 
                  src={t.avatar} 
                  alt={t.name}
                />
              ))}
            
            </div>
          </div>

          {/* Dynamic Review Card Box */}
          <div className="bg-[#15172c] rounded-3xl p-8 shadow-2xl border border-slate-800/50 flex flex-col justify-between min-h-[280px] w-full transition-all duration-300">
            <div>
              {/* Star Rating Layout (5 Yellow Stars) */}
              <div className="flex items-center space-x-1 text-amber-400 mb-5 text-sm">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Quote Message */}
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light transition-opacity duration-200">
                {currentTestimonial.text}
              </p>
            </div>

            {/* Card Profile & Control Strip */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/40">
              <div className="flex items-center space-x-3">
                <img 
                  className="w-12 h-12 rounded-full border border-slate-600 object-cover" 
                  src={currentTestimonial.avatar} 
                  alt={currentTestimonial.name} 
                />
                <div>
                  <h4 className="font-semibold text-white tracking-wide text-sm md:text-base">{currentTestimonial.name}</h4>
                  <p className="text-xs text-slate-400">{currentTestimonial.country}</p>
                </div>
              </div>

              {/* Slider Click Arrows */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={prevTestimonial} 
                  className="w-9 h-9 rounded-full bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition duration-200"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                </button>
                <button 
                  onClick={nextTestimonial} 
                  className="w-9 h-9 rounded-full bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition duration-200"
                  aria-label="Next testimonial"
                >
                  <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side Column: Dynamic Grid Map & Avatar Pins */}
        <div className="w-full lg:w-7/12 relative flex items-center justify-center opacity-90 lg:opacity-100 min-h-[350px] md:min-h-[480px]">

        <img src="../images/map.png" alt="" className="w-300 h-120" />
          
          {/* Custom CSS Grid Pattern Background Node Mimicking the Particle Grid in image_563520.png */}
          <div className="absolute inset-0 bg-[radial-gradient(#3c307a_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-50 mask-image-[radial-gradient(ellipse_at_center,black,transparent)]" />
          
          {/* Map Layout Path Silhouette */}
          <svg className="w-full h-auto text-purple-900/20 fill-current max-w-2xl" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
            <path d="M150,150 Q250,100 350,180 T600,120 T800,200 T950,150 T900,350 T650,400 T400,380 T150,420 Z" opacity="0.1" />
          </svg>

          {/* Interactive Global Pin Placements */}
          {/* Spain Target Pin */}
          <div 
            onClick={() => setCurrentIndex(1)} 
            className="absolute top-[32%] left-[48%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
          >
            <div className={`absolute inset-0 rounded-full bg-sky-500/40 animate-ping scale-150 ${currentIndex === 1 ? 'block' : 'hidden group-hover:block'}`} />
            <img 
              className={`w-10 h-10 rounded-full object-cover shadow-lg relative z-10 transition-all duration-300 ${currentIndex === 1 ? 'border-2 border-sky-400 scale-110 ring-4 ring-sky-500/20' : 'border-2 border-purple-500 group-hover:scale-110'}`} 
              src="../images/maria.png" 
              alt="Spain Target Pin" 
            />
          </div>

          {/* Africa Target Pin */}
          <div 
            onClick={() => setCurrentIndex(0)} 
            className="absolute bottom-[28%] left-[48%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
          >
            <div className={`absolute inset-0 rounded-full bg-indigo-500/40 animate-ping scale-150 ${currentIndex === 0 ? 'block' : 'hidden group-hover:block'}`} />
            <img 
              className={`w-10 h-10 rounded-full object-cover shadow-lg relative z-10 transition-all duration-300 ${currentIndex === 0 ? 'border-2 border-sky-400 scale-110 ring-4 ring-sky-500/20' : 'border-2 border-purple-500 group-hover:scale-110'}`} 
              src="../images/alex.png" 
              alt="Africa Target Pin" 
            />
          </div>

          {/* East Asia Target Pin */}
          <div 
            onClick={() => setCurrentIndex(2)} 
            className="absolute top-[37%] right-[18%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
          >
            <div className={`absolute inset-0 rounded-full bg-indigo-500/40 animate-ping scale-150 ${currentIndex === 2 ? 'block' : 'hidden group-hover:block'}`} />
            <img 
              className={`w-10 h-10 rounded-full object-cover shadow-lg relative z-10 transition-all duration-300 ${currentIndex === 2 ? 'border-2 border-sky-400 scale-110 ring-4 ring-sky-500/20' : 'border-2 border-purple-500 group-hover:scale-110'}`} 
              src="../images/yuki.png" 
              alt="Asia Target Pin" 
            />
          </div>

          {/* Australia Region Pin */}
          <div onClick={() => setCurrentIndex(3)} 
          className="absolute bottom-[20%] right-[12%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
          >
             <div className={`absolute inset-0 rounded-full bg-indigo-500/40 animate-ping scale-150 ${currentIndex === 3 ? 'block' : 'hidden group-hover:block'}`} />
            <img 
               className={`w-10 h-10 rounded-full object-cover shadow-lg relative z-10 transition-all duration-300 ${currentIndex === 3 ? 'border-2 border-sky-400 scale-110 ring-4 ring-sky-500/20' : 'border-2 border-purple-500 group-hover:scale-110'}`} 
              src="../images/james.png" 
              alt="Oceania Pin" 
            />
          </div>
          {/* USA region Pin */}
          <div onClick={() => setCurrentIndex(3)} 
          className="absolute top-[38%] left-[18%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
          >
             <div className={`absolute inset-0 rounded-full bg-indigo-500/40 animate-ping scale-150 ${currentIndex === 4 ? 'block' : 'hidden group-hover:block'}`} />
            <img 
               className={`w-10 h-10 rounded-full object-cover shadow-lg relative z-10 transition-all duration-300 ${currentIndex === 4 ? 'border-2 border-sky-400 scale-110 ring-4 ring-sky-500/20' : 'border-2 border-purple-500 group-hover:scale-110'}`} 
              src="../images/gina.png" 
              alt="US target Pin" 
            />
          </div>
               {/* USA region Pin */}
          <div onClick={() => setCurrentIndex(4)} 
          className="absolute bottom-[18%] left-[29%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
          >
             <div className={`absolute inset-0 rounded-full bg-indigo-500/40 animate-ping scale-150 ${currentIndex === 5 ? 'block' : 'hidden group-hover:block'}`} />
            <img 
               className={`w-10 h-10 rounded-full object-cover shadow-lg relative z-10 transition-all duration-300 ${currentIndex === 5 ? 'border-2 border-sky-400 scale-110 ring-4 ring-sky-500/20' : 'border-2 border-purple-500 group-hover:scale-110'}`} 
              src="../images/paulo.png" 
              alt="Brazil target Pin" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}