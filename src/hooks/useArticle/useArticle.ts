import useSWR from "swr";

import {getArticle} from "@/services/Article";
import Article from "@/types/Article";

const getArticleFetcher = async (articleId: string) => {
  const uid = articleId.replace("articles/", "");
  return getArticle(uid);
};

export default function useArticle(
  namespaceId: string,
  articleId?: string,
  initialData?: Article.Get,
): {
  article: Article.Get | null | undefined;
} {
  const {data: article} = useSWR(
    // eslint-disable-next-line no-nested-ternary
    namespaceId === "demo" ? null : articleId ? `articles/${articleId}` : null,
    getArticleFetcher,
    {initialData},
  );

  return {article};
}
