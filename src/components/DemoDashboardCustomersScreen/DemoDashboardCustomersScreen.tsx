import DashboardCustomersScreen, {
  Props as DashboardCustomersScreenProps,
} from "@/components/DashboardCustomersScreen";
import DemoBanner from "@/components/DemoBanner";

export type Props = Omit<DashboardCustomersScreenProps, "namespace">;

export default function DemoDashboardCustomersScreen({
  customers,
  current,
  total,
}: Props): JSX.Element {
  return (
    <>
      <DemoBanner />
      <DashboardCustomersScreen
        customers={customers}
        namespace="demo"
        current={current}
        total={total}
      />
    </>
  );
}
