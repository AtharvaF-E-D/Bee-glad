import HeroCardSection1 from "@/components/landing-page-comp/HeroCardSection1";
import HeroMain from "@/components/landing-page-comp/HeroMain";
import MordernTechnologies from "@/components/landing-page-comp/MordernTechnologies";
import SmartDigital from "@/components/landing-page-comp/SmartDigital";
import TrustAndClarity from "@/components/landing-page-comp/TrustAndClarity";
import ResourcesCarousel from "@/components/landing-page-comp/ResourcesCarousel";

export default function LandingPage() {
  return (
    <div className="text-white w-full">
      <HeroMain />
      <HeroCardSection1 />
      <MordernTechnologies />
      <SmartDigital />
      <TrustAndClarity />
      <ResourcesCarousel />
    </div>
  );
}
