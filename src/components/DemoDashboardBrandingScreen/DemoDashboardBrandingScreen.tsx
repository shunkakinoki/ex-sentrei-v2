import DashboardBrandingScreen from "@/components/DashboardBrandingScreen";
import DemoBanner from "@/components/DemoBanner";

export default function DemoDashboardBrandingScreen(): JSX.Element {
  return (
    <>
      <DemoBanner />
      <DashboardBrandingScreen namespaceId="demo" />
    </>
  );
}
