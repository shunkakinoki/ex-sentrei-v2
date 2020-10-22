import LandingBanner from "@/components/LandingBanner";
import HeaderRoot from "@/components/HeaderRoot";
import LandingFeature from "@/components/LandingFeature";
import LandingCta from "@/components/LandingCta";
import FooterRoot from "@/components/FooterRoot";
import ContainerRoot from "@/components/ContainerRoot";

export default function LandingScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <LandingBanner />
      <LandingFeature />
      <LandingCta />
      <FooterRoot />
    </ContainerRoot>
  );
}
