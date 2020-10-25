import DashboardTableItem from "@/components/DashboardTableItem";
import Article from "@/types/Article";

export interface Props {
  articles: Article[];
}

export default function DashboardTable({articles}: Props): JSX.Element {
  return (
    <>
      {articles.map(article => (
        <DashboardTableItem
          key={article.slug}
          date={article.date}
          title={article.title}
          pricing={article.pricing}
        />
      ))}
    </>
  );
}
