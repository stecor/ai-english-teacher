
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingContent } from "@/components/landing-content";
import { FeaturesSection } from "@/components/features-section";

export default function Home() {
  return (
    <main className=" mx-auto  bg-[#050816] p-55">
      <div className="mx-auto max-w-7xl">
        <LandingNavbar/>
       <FeaturesSection/>
        <footer className="fixed bottom-0 left-0 right-0 bg-[#050816]">
        <LandingContent />
        </footer>
      </div>
    </main>
  );
}