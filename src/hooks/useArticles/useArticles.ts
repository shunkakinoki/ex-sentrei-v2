import useSWR from "swr";

import {getArticles, ArticleQuery} from "@/services/Article";
import Article from "@/types/Article";

const getArticlesFetcher = async (
  _: string,
  spaceId: string,
  start: number,
  end: number,
) => {
  return getArticles({end, spaceId, start});
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
      ? ["articles", query.spaceId, query.start, query.end]
      : null,
    getArticlesFetcher,
    {initialData, revalidateOnMount: true},
  );

  return {articles};
}
