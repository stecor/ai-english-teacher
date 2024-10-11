"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'

import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";
import { Languages, Levels, processValue, routes } from "@/constants";
import { Dropbox } from "./ui/dropbox";
import {  useState } from 'react'







const poppins = Montserrat({ weight: '600', subsets: ['latin'] });







interface ChildComponentProps {
  message: string;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ message }) => {
  return <p>{message}</p>;
};






const handleSelectYourLanguage = (language: string) => {
  console.log(`Selected: ${language}`);
};

const  handleSelectLearnLanguage = (language: string) => {
  console.log(`Selected: ${language}`);
};                                                                                                                                                                                                                                                




export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,

}: {
  apiLimitCount: number;
    isPro: boolean;
 

}) => {
 
  const pathname = usePathname();

  // const [selectedValue, setSelectedValue] = useState("");
 
 
  // const handleSelectYourLevel = (value:string) => {
  //   setSelectedValue(processValue(value))
  //  };


  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14 ">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" sizes="w-10 h-10" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
          <span>WiseLang</span>
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route:any) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition ",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        {/* <div className=" text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition ">
          <Dropbox options={Levels} onSelect={handleSelectYourLevel} placeholder="Select Level" value={selectedValue}  />   
        
        </div> */}
       
        {/* <div className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition ">
          <Dropbox options={Languages} onSelect={handleSelectYourLanguage} placeholder="Your Language" />
        </div> */}
        {/* <div className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition ">
          <Dropbox options={Languages} onSelect={handleSelectLearnLanguage} placeholder="Learn Language" />
        </div>*/}
      </div> 
  
      <FreeCounter 
        apiLimitCount={apiLimitCount} 
        isPro={isPro}
      />
    </div>
  );
};

export { FreeCounter , Dropbox};

