import DashboardScreen from "@/components/DashboardScreen";
import DemoBanner from "@/components/DemoBanner";

export default function DemoDashboardScreen(): JSX.Element {
  return (
    <>
      <DemoBanner />
      <DashboardScreen namespace="demo" />
    </>
  );
}
