import dynamic from "next/dynamic";

import PaginationBase, {
  Props as PaginationBaseProps,
} from "@/components/PaginationBase";
import Article from "@/types/Article";

const DashboardTableItem = dynamic(
  () => import("@/components/DashboardTableItem"),
  {
    ssr: false,
  },
);

export interface Props extends PaginationBaseProps {
  articles: Article.Get[];
}

export default function DashboardTable({
  articles,
  current,
  total,
  namespaceId,
}: Props): JSX.Element {
  return (
    <>
      {articles.map((article, index) => (
        <>
          <DashboardTableItem
            key={article.uid}
            title={article.title}
            subtitle={article.subtitle}
            pricing={article.pricing}
            status={article.status}
            namespaceId={namespaceId}
            uid={article.uid}
            updatedAt={article.updatedAt}
          />
          {index !== articles.length - 1 && (
            <div className="flex my-3 border-t border-gray-300 sm:my-6 lg:my-8" />
          )}
        </>
      ))}
      {total > 1 && (
        <PaginationBase
          current={current}
          total={total}
          namespaceId={namespaceId}
        />
      )}
    </>
  );
}
