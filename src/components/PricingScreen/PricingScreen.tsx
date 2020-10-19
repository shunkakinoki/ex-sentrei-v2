import LandingHeader from "@/components/LandingHeader";
import PricingBanner from "@/components/PricingBanner";
import RootContainer from "@/components/RootContainer";

export default function PricingScreen(): JSX.Element {
  return (
    <RootContainer>
      <LandingHeader />
      <PricingBanner />
    </RootContainer>
  );
}
