import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";


const LandingPage = () => {
  return (
    <div className="mx-auto w-full min-h-screen">
      <LandingNavbar />
      <LandingHero/>
      <footer className="fixed bottom-0 left-0 right-0 bg-[#050816]">
      <LandingContent />
      </footer>
    </div>
  );
};

export default LandingPage;