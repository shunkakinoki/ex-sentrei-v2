import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashbaordStats from "@/components/DashboardStats";
import HeaderRoot from "@/components/HeaderRoot";

export type Props = Pick<ContainerDashboardProps, "namespace">;

export default function DashboardSalesScreen({namespace}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="sales" namespace={namespace}>
        <DashbaordStats />
      </ContainerDashboard>
    </ContainerRoot>
  );
}
