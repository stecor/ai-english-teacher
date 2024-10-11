"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  
  const { isSignedIn } = useAuth();

  return (
    <nav className="pt-16 p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center ">
        <div className="relative h-10 w-10 mr-4">
          <Image fill alt="Logo" src="/logo.png" sizes="w-14 h-14" />
        </div>
        <h1 className={cn("flex items-center text-5xl font-extrabold text-white", font.className)}>
         WiseLang
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          {/* <Button variant="outline" className="rounded-full">
            Sign In
          </Button> */}
        </Link>
      </div>
    </nav>
  )
}