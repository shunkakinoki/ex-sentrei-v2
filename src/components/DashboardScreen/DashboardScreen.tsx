import dynamic from "next/dynamic";

import ContainerDashboard from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import {Props as DashboardTableProps} from "@/components/DashboardTable";
import HeaderRoot from "@/components/HeaderRoot";
import SeoApp from "@/components/SeoApp";
import Article from "@/types/Article";

const DashboardTable = dynamic(() => import("@/components/DashboardTable"), {
  ssr: false,
});

export interface Props extends DashboardTableProps {
  articles: Article.Get[];
}

export default function DashboardScreen({
  articles,
  current,
  total,
  namespaceId,
}: Props): JSX.Element {
  return (
    <>
      <SeoApp title="Dashboard" />
      <ContainerRoot>
        <HeaderRoot />
        <ContainerDashboard type="articles" namespaceId={namespaceId}>
          <div className="container my-6 sm:mx-3 md:mx-6 md:mt-10">
            <DashboardTable
              articles={articles}
              current={current}
              total={total}
              namespaceId={namespaceId}
            />
          </div>
        </ContainerDashboard>
      </ContainerRoot>
    </>
  );
}
