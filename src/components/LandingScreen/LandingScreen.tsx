import LandingBanner from "@/components/LandingBanner";
import LandingHeader from "@/components/LandingHeader";
import LandingFeature from "@/components/LandingFeature";

export default function LandingScreen(): JSX.Element {
  return (
    <div className="container min-h-screen px-5 mx-auto">
      <LandingHeader />
      <LandingBanner />
      <LandingFeature />
    </div>
  );
}
