import DashboardSalesScreen, {
  Props as DashboardSalesScreenProps,
} from "@/components/DashboardSalesScreen";
import DemoBanner from "@/components/DemoBanner";

export type Props = Pick<DashboardSalesScreenProps, "sales">;

export default function DemoDashboardSalesScreen({sales}: Props): JSX.Element {
  return (
    <>
      <DemoBanner />
      <DashboardSalesScreen
        current={1}
        total={1}
        sales={sales}
        namespaceId="demo"
      />
    </>
  );
}
