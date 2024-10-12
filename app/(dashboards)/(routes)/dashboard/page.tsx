'use client'

import { Card } from "@/components/ui/card";
import VideoComponent from "@/components/videoComponent";
import { tools } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";




const DashboardPage = () => {
  const router = useRouter()
  return (
    <div className="mb-8 space-y-4 bg-cover bg-[#192339]">
        <div className="flex items-center justify-center">
        <img src="logo.png" alt="logo" className="h-8  md:h-12 w-8 md:w-12 mr-2"/>  
        <h1 className="text-4xl md:text-6xl font-bold  text-white">WiseLang</h1>
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-center text-white">
        Explorer the power of AI
      </h2>
      <p className="text-muted-foreground font-light text-sm md:text-sm text-center  text-white">
        Chat with the Smartest and Powerfull AI
      </p>
      <div className="flex items-center justify-center"><VideoComponent/></div>
      <div className="px-4 md:px-20 lg:px32 space-y-4 ">
        {tools.map((tool:any) => (
          <Card
            onClick={()=> router.push(tool.href)}
            key={tool.label}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8",tool.color)}/>
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage;