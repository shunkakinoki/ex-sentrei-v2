import useSWR from "swr";

import {getArticle} from "@/services/Article";
import Article from "@/types/Article";

const getArticleFetcher = async (articleId: string) => {
  const uid = articleId.replace("articles/", "");
  return getArticle(uid);
};

export default function useArticle(
  namespaceId: string,
  uid?: string,
): {
  article: Article.Get | null | undefined;
} {
  const {data: article} = useSWR(
    // eslint-disable-next-line no-nested-ternary
    namespaceId === "demo" ? null : uid ? `articles/${uid}` : null,
    getArticleFetcher,
  );

  return {article};
}
