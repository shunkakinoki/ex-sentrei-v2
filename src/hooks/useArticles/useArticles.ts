import useSWR from "swr";

import {getArticles, ArticleQuery} from "@/services/Article";
import Article from "@/types/Article";

const getArticlesFetcher = async (query: ArticleQuery) => {
  return getArticles(query);
};

export default function useArticle(
  namespaceId: string,
  query: ArticleQuery,
  initialData?: Article.Get[],
): {
  articles: Article.Get[] | null | undefined;
} {
  const {data: articles} = useSWR(
    // eslint-disable-next-line no-nested-ternary
    namespaceId === "demo" ? null : query ? `articles/${query.spaceId}` : null,
    getArticlesFetcher,
    {initialData},
  );

  return {articles};
}
