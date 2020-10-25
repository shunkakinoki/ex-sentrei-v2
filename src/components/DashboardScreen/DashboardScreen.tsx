import ContainerDashboard from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashboardStats from "@/components/DashboardStats";
import DashboardTable, {
  Props as DashboardTableProps,
} from "@/components/DashboardTable";
import HeaderRoot from "@/components/HeaderRoot";
import Article from "@/types/Article";

export interface Props extends DashboardTableProps {
  articles: Article[];
}

export default function DashboardScreen({
  articles,
  current,
  total,
  namespace,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="articles" namespace={namespace}>
        <DashboardStats />
        <DashboardTable
          articles={articles}
          current={current}
          total={total}
          namespace={`${namespace}/dashboard`}
        />
      </ContainerDashboard>
    </ContainerRoot>
  );
}