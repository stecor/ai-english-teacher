"use client";

import {Sidebar} from "@/components/dashboard/sidebar";
import {Header} from "@/components/dashboard/header";
import {GoalCard} from "@/components/dashboard/goalcard";
import {StatCard }from "@/components/dashboard/statcard";
import {RecentLessons} from "@/components/dashboard/recent-lessons";
import {WeeklyChart} from "@/components/dashboard/weekly-chart";
// import TutorCard from "@/components/dashboard/TutorCard";

import {
  BookOpen,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { TutorCard } from "@/components/dashboard/tutorcard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Sidebar */}
      <Sidebar />

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





// import Navbar from "@/components/navbar";
// import { Sidebar } from "@/components/sidebar";
// import { checkSubscription } from "@/lib/subscription";
// import { getApiLimitCount } from "@/lib/api-limit";

// const DashboardLayout = async ({
//   children,
// }: {
//   children: React.ReactNode
// }) => {
//   const apiLimitCount = await getApiLimitCount();
//   const isPro = await checkSubscription();

//   return ( 
//     <div className="h-full relative bg-[#192339]">
//       <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
//         <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
//       </div>
//       <main className="md:pl-72 pb-10">
//         <Navbar />
//         {children}
//       </main>
//     </div>
//    );
// }
 
// export default DashboardLayout;