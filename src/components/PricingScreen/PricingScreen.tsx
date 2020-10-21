import LandingHeader from "@/components/LandingHeader";
import PricingBanner from "@/components/PricingBanner";
import ContainerRoot from "@/components/ContainerRoot";
import LandingFooter from "@/components/LandingFooter";

export default function PricingScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <LandingHeader />
      <PricingBanner />
      <LandingFooter />
    </ContainerRoot>
  );
}
