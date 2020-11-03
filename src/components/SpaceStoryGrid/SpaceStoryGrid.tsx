import SpaceStoryCard from "@/components/SpaceStoryCard";
import Article from "@/types/Article";

export interface Props {
  articles: Article.Get[];
  namespaceId: string;
}

export default function SpaceStoryGrid({
  articles,
  namespaceId,
}: Props): JSX.Element {
  return (
    <section className="mt-8 mb-16 sm:mt-16 md:mb-12 lg:mb-20">
      <div className="flex flex-wrap mb-8 -mx-2">
        {articles.map((article, index) => {
          return (
            <SpaceStoryCard
              key={article.uid}
              updatedAt={article.updatedAt}
              image={article.image}
              pricing={article.pricing}
              time={article.time}
              title={article.title}
              subtitle={article.subtitle}
              status={article.status}
              namespaceId={namespaceId}
              uid={article.uid}
              variant={index % 4 === 0 || index % 4 === 3 ? "small" : "medium"}
            />
          );
        })}
      </div>
    </section>
  );
}
