import useSWR from "swr";

import {getArticles} from "@/services/Article";
import Article, {ArticleQuery} from "@/types/Article";

const getArticlesFetcher = async (
  _: string,
  spaceId: string,
  start: number,
  end: number,
  status: "published" | "preview",
  limit: number,
) => {
  return getArticles({end, limit, spaceId, start, status});
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
      ? [
          "articles",
          query.spaceId,
          query.start,
          query.end,
          query.status,
          query.limit,
        ]
      : null,
    getArticlesFetcher,
    {initialData, revalidateOnMount: true},
  );

  return {articles};
}
