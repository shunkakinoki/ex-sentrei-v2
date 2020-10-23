import DashboardSalesScreen from "@/components/DashboardSalesScreen";
import DemoBanner from "@/components/DemoBanner";

export default function DemoDashboardSalesScreen(): JSX.Element {
  return (
    <>
      <DemoBanner />
      <DashboardSalesScreen namespace="demo" />
    </>
  );
}
