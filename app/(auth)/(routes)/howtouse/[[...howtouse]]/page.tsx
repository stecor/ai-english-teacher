import { LandingNavbar } from "@/components/landing-navbar";
import { LandingContent } from "@/components/landing-content";
import { HowtouseSection} from "@/components/howtouse-section";

export default function Home() {
  return (
    <main className="mx-auto bg-[#050816] pt-10">
      <div className=" max-w-7xl">
        <LandingNavbar/>
       <HowtouseSection/>
        <footer className="fixed bottom-0 left-0 right-0 bg-[#050816]">
        <LandingContent />
        </footer>
      </div>
    </main>
  );
}