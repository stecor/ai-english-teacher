"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {testimonials} from '@/constants'
import { Avatar, AvatarImage } from "@/components/ui/avatar";





const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z" />
      </svg>
    ),
    title: "AI Conversations",
    subtitle: "that feel real",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Instant Feedback",
    subtitle: "while you speak",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Personalized Lessons",
    subtitle: "just for you",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Track Your Progress",
    subtitle: "see how far you've come",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Practice Anytime",
    subtitle: "anywhere, any device",
  },
];

export const LandingContent = () => {
  return (
    <section style={{ background: "rgba(255,255,255,0.03)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <div className="feature-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{f.title}</p>
                <p className="text-gray-500 text-xs">{f.subtitle}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}





// export const LandingContent = () => {
//   return (
//     <div className="px-10 pb-20">
//       <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {testimonials.map((item) => (
//           <Card key={item.description} className="bg-[#192339] border-none text-white">
//             <CardHeader>
//               <CardTitle className="m-auto gap-x-2">
//               <Avatar className="m-auto">
//                     <AvatarImage className="p-0" src={item.avatar} sizes="h-8 w-8"/>
//                   </Avatar>
//                 <div className="text-center pt-3">
//                   <p className="text-lg">{item.name}</p>
//                   <p className="text-zinc-400 text-sm ">{item.title}</p>
//                 </div>
//               </CardTitle>
//               <CardContent className="pt-4 text-center">
//                 {item.description}
//               </CardContent>
//             </CardHeader>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }