import dynamic from "next/dynamic";

import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import LandingCta from "@/components/LandingCta";
import LandingDemo from "@/components/LandingDemo";
import LandingFaq from "@/components/LandingFaq";
import LandingFeature from "@/components/LandingFeature";
import LandingHero from "@/components/LandingHero";
import LandingJourney from "@/components/LandingJourney";
import LandingMission from "@/components/LandingMission";
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
      <OneTap />
      <HeaderRoot />
      <PapercupsWidget />
      <LandingHero />
      <LandingDemo />
      <LandingMission />
      <LandingJourney />
      <LandingTestimonial />
      <LandingFeature />
      <LandingFaq />
      <LandingCta />
      <FooterRoot />
    </>
  );
}
