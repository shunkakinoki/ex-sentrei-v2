import LandingHero from "@/components/LandingHero";
import HeaderRoot from "@/components/HeaderRoot";
import LandingFeature from "@/components/LandingFeature";
import LandingCta from "@/components/LandingCta";
import FooterRoot from "@/components/FooterRoot";
import ContainerRoot from "@/components/ContainerRoot";

export default function LandingScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <LandingHero />
      <LandingFeature />
      <LandingCta />
      <FooterRoot />
    </ContainerRoot>
  );
}
