import useSWR from "swr";

import {getArticles} from "@/services/Article";
import Article, {ArticleQuery} from "@/types/Article";

const getArticlesFetcher = async (
  _: string,
  spaceId: string,
  start: number,
  end: number,
) => {
  return getArticles({end, spaceId, start});
};

export default function useArticlesInfinite(
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
    {
      errorRetryCount: 0,
      errorRetryInterval: 0,
      initialData,
      refreshInterval: 0,
      refreshWhenHidden: false,
      refreshWhenOffline: false,
      revalidateOnFocus: false,
      revalidateOnMount: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    },
  );

  return {articles};
}
