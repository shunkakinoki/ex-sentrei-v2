import LandingHeader from "@/components/LandingHeader";
import PricingBanner from "@/components/PricingBanner";
import RootContainer from "@/components/RootContainer";
import LandingFooter from "@/components/LandingFooter";

export default function PricingScreen(): JSX.Element {
  return (
    <RootContainer>
      <LandingHeader />
      <PricingBanner />
      <LandingFooter />
    </RootContainer>
  );
}
