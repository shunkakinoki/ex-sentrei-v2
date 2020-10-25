import DashboardCustomersScreen from "@/components/DashboardCustomersScreen";
import DemoBanner from "@/components/DemoBanner";

export default function DemoDashboardCustomersScreen(): JSX.Element {
  return (
    <>
      <DemoBanner />
      <DashboardCustomersScreen namespace="demo" />
    </>
  );
}
