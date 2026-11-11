import {JourneySection} from "@/components/journey-section";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingContent } from "@/components/landing-content";

export default function Home() {
  return (
    <main className=" mx-auto  mt-30">
       {/* Background glow */}
      <div className="pointer-events-none absolute -left-64 top-0 h-[550px] w-[550px] rounded-full bg-violet-700/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-64 top-40 h-[600px] w-[600px] rounded-full bg-purple-700/20 blur-[140px]" />
      <div className="mx-auto max-w-7xl">
        <LandingNavbar/>
        <JourneySection />
        <footer className="fixed bottom-0 left-0 right-0 bg-[#050816]">
        <LandingContent />
        </footer>
      </div>
    </main>
  );
}