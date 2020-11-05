import useSWR from "swr";

import {getArticles} from "@/services/Article";
import Article, {ArticleQuery} from "@/types/Article";

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
      ? null
      : query
      ? ["articles", query.spaceId, query.startAfter, query.status]
      : null,
    getArticlesFetcher,
    {initialData},
  );

  return {articles};
}
