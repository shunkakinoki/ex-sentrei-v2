import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashboardStats from "@/components/DashboardStats";
import DashboardTable from "@/components/DashboardTable";
import HeaderRoot from "@/components/HeaderRoot";
import Article from "@/types/Article";

export interface Props extends Pick<ContainerDashboardProps, "namespace"> {
  articles: Article[];
}

export default function DashboardScreen({
  articles,
  namespace,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="articles" namespace={namespace}>
        <DashboardStats />
        <DashboardTable articles={articles} />
      </ContainerDashboard>
    </ContainerRoot>
  );
}
