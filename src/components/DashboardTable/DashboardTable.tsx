import DashboardTableItem from "@/components/DashboardTableItem";
import Article from "@/types/Article";

export interface Props {
  articles: Article[];
}

export default function DashboardTable({articles}: Props): JSX.Element {
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
          />
          {index !== articles.length - 1 && (
            <div className="flex my-3 border-t border-gray-300 sm:my-6 lg:my-8" />
          )}
        </>
      ))}
    </>
  );
}
