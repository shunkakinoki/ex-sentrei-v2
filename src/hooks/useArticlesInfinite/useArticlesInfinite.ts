import useSWR from "swr";

import {getArticles} from "@/services/Article";
import Article, {ArticleQuery} from "@/types/Article";

const getArticlesFetcher = async (_: string, spaceId: string) => {
  return getArticles({spaceId, status: "published"});
};

export default function useArticlesInfinite(
  namespaceId: string,
  query: ArticleQuery,
  initialData?: Article.Get[],
): {
  articles: Article.Get[] | null | undefined;
} {
  const {data: articles, mutate} = useSWR(
    // eslint-disable-next-line no-nested-ternary
    namespaceId === "demo" ? null : query ? ["articles", query.spaceId] : null,
    getArticlesFetcher,
    {
      initialData,
    },
  );

  return {articles};
}
