import LandingHeader from "@/components/LandingHeader";
import ContainerRoot from "@/components/ContainerRoot";
import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import DashbaordStats from "@/components/DashboardStats";
import DashbaordTable from "@/components/DashboardTable";

export type Props = Pick<ContainerDashboardProps, "namespace">;

export default function DashboardScreen({namespace}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <LandingHeader />
      <ContainerDashboard type="articles" namespace={namespace}>
        <DashbaordStats />
        <DashbaordTable />
      </ContainerDashboard>
    </ContainerRoot>
  );
}
