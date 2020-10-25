import DashboardScreen, {
  Props as DashboardScreenProps,
} from "@/components/DashboardScreen";
import DemoBanner from "@/components/DemoBanner";

export type Props = Omit<DashboardScreenProps, "namespace">;

export default function DemoDashboardScreen({
  articles,
  current,
  total,
}: Props): JSX.Element {
  return (
    <>
      <DemoBanner />
      <DashboardScreen
        articles={articles}
        current={current}
        total={total}
        namespace="demo"
      />
    </>
  );
}
