import LandingHeader from "@/components/LandingHeader";
import PricingBanner from "@/components/PricingBanner";

export default function PricingScreen(): JSX.Element {
  return (
    <div className="container min-h-screen px-5 mx-auto">
      <LandingHeader />
      <PricingBanner />
    </div>
  );
}
