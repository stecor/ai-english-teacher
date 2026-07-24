"use client"

import {Sidebar} from "@/components/dashboard/sidebar";
import {Header} from "@/components/dashboard/header";
import {GoalCard} from "@/components/dashboard/goalcard";
import {StatCard }from "@/components/dashboard/statcard";
import {RecentLessons} from "@/components/dashboard/recent-lessons";
import {WeeklyChart} from "@/components/dashboard/weekly-chart";
import {ArrowRight, BookOpen,TrendingUp,Trophy} from "lucide-react";
import { TutorCard } from "@/components/dashboard/tutorcard";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { tools } from "@/constants";
import { UserAvatar } from "@/components/user-avatar";
import { cn } from "@/lib/utils";


const DashboardPage = () => {

   const router = useRouter()

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Sidebar */}
      {/* <Sidebar apiLimitCount={0} isPro={false}  /> */}
      {/* <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} /> */}

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen p-5 lg:p-8">
      
        {/* Header */}
        <Header />


        {/* Goal Card */}
        <section className="mt-8">
          <GoalCard />
        </section>

        {/* Statistics */}
        <section className="mt-8 grid gap-6 md:grid-cols-3">

          <StatCard
            icon={BookOpen}
            title="Lessons Completed"
            value="18"
            subtitle="Keep it up!"
          />
       
          <StatCard
            icon={TrendingUp}
            title="Words Learned"
            value="362"
            subtitle="+12 this week"
          /> 

        <StatCard
            icon={Trophy}
            title="Current Level"
            value="B1"
            subtitle="Intermediate"
          />

        </section>

        {/* Content */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">

          <RecentLessons />

          <WeeklyChart />

        </section>

        {/* AI Tutor */}
        <section className="mt-8">

          <TutorCard />

        </section>
        
      </main>
    </div>
  );
}

export default DashboardPage;



// 'use client'

// import { Card } from "@/components/ui/card";
// import VideoComponent from "@/components/videoComponent";
// import { tools } from "@/constants";
// import { cn } from "@/lib/utils";
// import { ArrowRight, Code, ImageIcon, MessageSquare } from "lucide-react";
// import { useRouter } from "next/navigation";




// const DashboardPage = () => {
//   const router = useRouter()
//   return (
//     <div className="mb-8 space-y-4 bg-cover bg-[#192339]">
//         <div className="flex items-center justify-center">
//         <img src="logo.png" alt="logo" className="h-8  md:h-12 w-8 md:w-12 mr-2"/>  
//         <h1 className="text-4xl md:text-6xl font-bold  text-white">WiseLang</h1>
//       </div>
//       <h2 className="text-2xl md:text-4xl font-bold text-center text-white">
//         Explorer the power of AI
//       </h2>
//       <p className="text-muted-foreground font-light text-sm md:text-sm text-center  text-white">
//         Chat with the Smartest and Powerfull AI
//       </p>
//       <div className="flex items-center justify-center"><VideoComponent/></div>
//       <div className="px-4 md:px-20 lg:px32 space-y-4 ">
//         {tools.map((tool:any) => (
//           <Card
//             onClick={()=> router.push(tool.href)}
//             key={tool.label}
//             className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
//           >
//             <div className="flex items-center gap-x-4">
//               <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
//                 <tool.icon className={cn("w-8 h-8",tool.color)}/>
//               </div>
//               <div className="font-semibold">
//                 {tool.label}
//               </div>
//             </div>
//             <ArrowRight className="w-5 h-5"/>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default DashboardPage;