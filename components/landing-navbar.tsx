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
<<<<<<< HEAD
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" sizes="w-10 h-10" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
         WiseLang - A.I English Teacher
=======
    <nav className="pt-16 p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center ">
        <div className="relative h-10 w-10 mr-4">
          <Image fill alt="Logo" src="/logo.png" sizes="w-14 h-14" />
        </div>
        <h1 className={cn("flex items-center text-5xl font-extrabold text-white", font.className)}>
         WiseLang
>>>>>>> c40de51 (first commit)
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
<<<<<<< HEAD
          <Button variant="outline" className="rounded-full">
            Sign In
          </Button>
=======
          {/* <Button variant="outline" className="rounded-full">
            Sign In
          </Button> */}
>>>>>>> c40de51 (first commit)
        </Link>
      </div>
    </nav>
  )
}