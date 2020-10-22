import LandingHeader from "@/components/LandingHeader";
import ContainerRoot from "@/components/ContainerRoot";
import DashbaordStats from "@/components/DashboardStats";
import DashbaordTable from "@/components/DashboardTable";

export default function DashboardScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <LandingHeader />
      <DashbaordStats />
      <DashbaordTable />
    </ContainerRoot>
  );
}
