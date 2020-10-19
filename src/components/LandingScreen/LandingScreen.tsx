import LandingBanner from "@/components/LandingBanner";
import LandingHeader from "@/components/LandingHeader";
import LandingFeature from "@/components/LandingFeature";
import LandingCta from "@/components/LandingCta";
import LandingFooter from "@/components/LandingFooter";
import RootContainer from "@/components/RootContainer";

export default function LandingScreen(): JSX.Element {
  return (
    <RootContainer>
      <LandingHeader />
      <LandingBanner />
      <LandingFeature />
      <LandingCta />
      <LandingFooter />
    </RootContainer>
  );
}
