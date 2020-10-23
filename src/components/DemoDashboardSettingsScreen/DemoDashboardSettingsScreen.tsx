import DashboardSettingsScreen from "@/components/DashboardSettingsScreen";
import DemoBanner from "@/components/DemoBanner";

export default function DemoDashboardSettingsScreen(): JSX.Element {
  return (
    <>
      <DemoBanner />
      <DashboardSettingsScreen namespace="demo" />
    </>
  );
}
