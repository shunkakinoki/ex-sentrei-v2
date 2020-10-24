import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashbaordStats from "@/components/DashboardStats";
import DashbaordTable from "@/components/DashboardTable";
import HeaderRoot from "@/components/HeaderRoot";

export type Props = Pick<ContainerDashboardProps, "namespace">;

export default function DashboardScreen({namespace}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="articles" namespace={namespace}>
        <DashbaordStats />
        <DashbaordTable />
      </ContainerDashboard>
    </ContainerRoot>
  );
}
