import dynamic from "next/dynamic";

import useArticlesInfinite from "@/hooks/useArticlesInfinite";
import Article from "@/types/Article";

export interface Props {
  articles: Article.Get[];
  namespaceId: string;
  spaceId: string;
}

const SpaceStoryCard = dynamic(() => import("@/components/SpaceStoryCard"), {
  ssr: false,
});

export default function SpaceStoryGrid({
  articles,
  namespaceId,
  spaceId,
}: Props): JSX.Element {
  const {articles: swrArticles} = useArticlesInfinite(
    namespaceId,
    {
      spaceId,
      startAfter: undefined,
      status: "published",
    },
    articles,
  );

  return (
    <section className="mt-8 mb-16 sm:mt-16 md:mb-12 lg:mb-20">
      <div className="flex flex-wrap mb-8 -mx-2">
        {swrArticles &&
          swrArticles.map((article, index) => {
            return (
              <SpaceStoryCard
                key={article.id}
                updatedAt={article.updatedAt}
                image={article.image}
                pricing={article.pricing}
                time={article.time}
                title={article.title}
                subtitle={article.subtitle}
                status={article.status}
                namespaceId={namespaceId}
                id={article.id}
                variant={
                  index % 4 === 0 || index % 4 === 3 ? "small" : "medium"
                }
              />
            );
          })}
      </div>
    </section>
  );
}
