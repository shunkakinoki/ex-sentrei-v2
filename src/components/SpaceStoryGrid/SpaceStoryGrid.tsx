import dynamic from "next/dynamic";
import {useState, useEffect} from "react";

import db from "@/firebase/db";
import useArticlesInfinite from "@/hooks/useArticlesInfinite";
import {getArticlesSnapshot} from "@/services/Article";
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
  const [lastPath] = useState<string>(
    `articles/${articles[articles.length - 1].id}`,
  );
  const [lastItem, setLastItem] = useState<
    firebase.default.firestore.DocumentSnapshot
  >();

  const {articles: swrArticles} = useArticlesInfinite(
    namespaceId,
    {
      spaceId,
      startAfter: undefined,
      status: "published",
    },
    articles,
  );

  useEffect(() => {
    // eslint-disable-next-line no-void
    void db.doc(lastPath).get().then(setLastItem);
  }, [lastPath]);

  const handleClick = (): void => {
    // eslint-disable-next-line no-void
    void getArticlesSnapshot({startAfter: lastItem, spaceId}).then(res => {
      const last = res[res.length - 1];
      setLastItem(last.snap);
    });
  };

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
      <div className="flex justify-center">
        <button
          type="button"
          className="px-4 py-2 font-bold text-white bg-pink-500 rounded-full hover:bg-pink-700"
          onClick={handleClick}
        >
          Load More
        </button>
      </div>
    </section>
  );
}
