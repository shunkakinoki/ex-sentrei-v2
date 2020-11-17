import dynamic from "next/dynamic";

import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import LandingCta from "@/components/LandingCta";
import LandingDemo from "@/components/LandingDemo";
import LandingFaq from "@/components/LandingFaq";
import LandingFeature from "@/components/LandingFeature";
import LandingGlobe from "@/components/LandingGlobe";
import LandingHero from "@/components/LandingHero";
import LandingJourney from "@/components/LandingJourney";
import LandingLogo from "@/components/LandingLogo";
import LandingMission from "@/components/LandingMission";
import LandingStats from "@/components/LandingStats";
import LandingTestimonial from "@/components/LandingTestimonial";
import SeoLanding from "@/components/SeoLanding";

const OneTap = dynamic(() => import("@/components/OneTap"), {ssr: false});

const PapercupsWidget = dynamic(() => import("@/components/PapercupsWidget"), {
  ssr: false,
});

export default function LandingScreen(): JSX.Element {
  return (
    <>
      <SeoLanding title="Sentrei" />
      <OneTap delay />
      <HeaderRoot />
      <PapercupsWidget />
      <LandingHero />
      <LandingDemo />
      <LandingLogo />
      <LandingMission />
      <LandingJourney />
      <LandingTestimonial />
      <LandingFeature />
      <LandingGlobe />
      <LandingFaq />
      <LandingStats />
      <LandingCta />
      <FooterRoot />
    </>
  );
}
