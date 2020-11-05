import useSWR from "swr";

import {getArticles} from "@/services/Article";
import Article, {ArticleQuery} from "@/types/Article";
import {createArticles} from "@/utils/faker";

const getArticlesFetcher = async (
  _: string,
  spaceId: string,
  status: "published" | "preview",
  startAfter?: string,
) => {
  if (startAfter) {
    const startAfterShot = JSON.parse(
      startAfter,
    ) as firebase.default.firestore.DocumentSnapshot;
    return getArticles({
      limit: 6,
      spaceId,
      startAfter: startAfterShot,
      status,
    });
  }

  return getArticles({limit: 6, spaceId, startAfter: undefined, status});
};

export default function useArticles(
  namespaceId: string,
  query: ArticleQuery,
  initialData?: Article.Get[],
): {
  articles: Article.Get[] | null | undefined;
} {
  const {data: articles} = useSWR(
    // eslint-disable-next-line no-nested-ternary
    namespaceId === "demo"
      ? JSON.stringify(query.startAfter)
      : query
      ? [
          "articles",
          query.spaceId,
          JSON.stringify(query.startAfter),
          query.status,
        ]
      : null,
    namespaceId === "demo" ? createArticles : getArticlesFetcher,
    {initialData},
  );

  return {articles};
}
