import LandingBanner from "@/components/LandingBanner";
import LandingHeader from "@/components/LandingHeader";
import LandingFeature from "@/components/LandingFeature";
import LandingCta from "@/components/LandingCta";
import LandingFooter from "@/components/LandingFooter";
import ContainerRoot from "@/components/ContainerRoot";

export default function LandingScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <LandingHeader />
      <LandingBanner />
      <LandingFeature />
      <LandingCta />
      <LandingFooter />
    </ContainerRoot>
  );
}
