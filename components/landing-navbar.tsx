"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });





const navLinks = [
          {label:"Features", href:"/features" },
          {label:"Journey", href:"/journey" },
          {label:"Pricing", href:"/price" },
          {label:"Testimonials", href:"/testimonials"}, 
          {label:"Blog", href:"/blog"},
        ];

export const LandingNavbar = () => {
  
  const { isSignedIn } = useAuth();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
         style={{ background: "rgba(13,13,26,0.8)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        {/* Globe icon */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center"
             style={{ background: "linear-gradient(135deg,#a855f7,#6366f1)" }}>
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="text-white font-bold text-lg tracking-tight">wiselang</span>
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link key={link.href} 
                href={link.href} 
                className="nav-link text-sm font-medium">
                  {link.label}
          </Link>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex items-center gap-3">
        <Link href="/sign-in"
              className="nav-link text-sm font-medium px-4 py-2 rounded-full border border-white/20 hover:bg-white/8 transition-all">
          Log in
        </Link>
        <Link href="/sign-up"
              className="cta-btn text-white text-sm font-semibold px-5 py-2.5 rounded-full">
          Try Wiselang Free
        </Link>
      </div>
    </nav>
  );
}





// export const LandingNavbar = () => {
  
//   const { isSignedIn } = useAuth();

//   return (
//     <nav className="p-4 bg-transparent flex items-center justify-between">
//       <Link href="/" className="flex items-center">
//         <div className="relative h-8 w-8 mr-4">
//           <Image fill alt="Logo" src="/logo.png" sizes="w-10 h-10" />
//         </div>
//         <h1 className={cn("text-2xl font-bold text-white", font.className)}>
//          WiseLang - A.I English Teacher
//         </h1>
//       </Link>
//       <div className="flex items-center gap-x-2">
//         <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
//           <Button variant="outline" className="rounded-full">
//             Sign In
//           </Button>
//         </Link>
//       </div>
//     </nav>
//   )
// }