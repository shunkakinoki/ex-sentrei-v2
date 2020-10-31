import DashboardTableItem from "@/components/DashboardTableItem";
import PaginationBase, {
  Props as PaginationBaseProps,
} from "@/components/PaginationBase";
import Article from "@/types/Article";

export interface Props extends PaginationBaseProps {
  articles: Article[];
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
            key={article.slug}
            date={article.date}
            title={article.title}
            subtitle={article.subtitle}
            pricing={article.pricing}
            status={article.status}
          />
          {index !== articles.length - 1 && (
            <div className="flex my-3 border-t border-gray-300 sm:my-6 lg:my-8" />
          )}
        </>
      ))}
      <PaginationBase
        current={current}
        total={total}
        namespaceId={namespaceId}
      />
    </>
  );
}
