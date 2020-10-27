import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import LandingCta from "@/components/LandingCta";
import LandingFeature from "@/components/LandingFeature";
import LandingHero from "@/components/LandingHero";

const PapercupsWidget = dynamic(() => import("@/components/PapercupsWidget"), {
  ssr: false,
});

export default function LandingScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <PapercupsWidget />
      <LandingHero />
      <LandingFeature />
      <LandingCta />
      <FooterRoot />
    </ContainerRoot>
  );
}
