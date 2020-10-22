import HeaderRoot from "@/components/HeaderRoot";
import ContainerRoot from "@/components/ContainerRoot";
import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import DashbaordStats from "@/components/DashboardStats";
import DashbaordTable from "@/components/DashboardTable";

export type Props = Pick<ContainerDashboardProps, "namespace">;

export default function DashboardSettingsScreen({
  namespace,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="settings" namespace={namespace}>
        <DashbaordStats />
        <DashbaordTable />
      </ContainerDashboard>
    </ContainerRoot>
  );
}
