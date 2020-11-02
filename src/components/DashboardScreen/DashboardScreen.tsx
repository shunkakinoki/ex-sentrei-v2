import ContainerDashboard from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashboardTable, {
  Props as DashboardTableProps,
} from "@/components/DashboardTable";
import HeaderRoot from "@/components/HeaderRoot";
import useArticles from "@/hooks/useArticles";
import useAuth from "@/hooks/useAuth";
import Article from "@/types/Article";

export interface Props extends DashboardTableProps {
  articles: Article.Get[];
}

export default function DashboardScreen({
  articles,
  current,
  total,
  namespaceId,
}: Props): JSX.Element {
  const {authState} = useAuth();
  const {articles: swrArticles} = useArticles(
    namespaceId,
    {spaceId: authState?.uid ?? "", start: current, end: current + 10},
    articles,
  );

  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="articles" namespaceId={namespaceId}>
        <div className="container my-6 sm:mx-3 md:mx-6 md:mt-10">
          {swrArticles && (
            <DashboardTable
              articles={swrArticles}
              current={current}
              total={total}
              namespaceId={namespaceId}
            />
          )}
        </div>
      </ContainerDashboard>
    </ContainerRoot>
  );
}
