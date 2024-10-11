import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import { GoogleAnalytics } from '@next/third-parties/google'

const LandingPage = () => {
  return ( 
    
    <div className="h-full ">
      { /* <GoogleAnalytics gaId={`${process.env.GA_TRACKING_ID}`} /> */}
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
   );
}
 
export default LandingPage;