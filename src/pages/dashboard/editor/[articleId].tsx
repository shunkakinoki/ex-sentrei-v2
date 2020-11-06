import {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";

import EditorScreen, {
  Props as EditorScreenProps,
} from "@/components/EditorScreen";
import {getAdminArticle} from "@/servicesAdmin/Article";
import Article from "@/types/Article";

export type Props = Omit<
  EditorScreenProps,
  "article" | "articleId" | "namespaceId"
> & {
  article: string;
  articleId: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  const article = await getAdminArticle(String(params?.articleId));

  if (!article) {
    return {notFound: true};
  }
  return {
    props: {
      article: JSON.stringify(article),
      articleId: JSON.stringify(params?.articleId),
    },
    revalidate: 30,
  };
};

const ArticleId = ({
  article,
  articleId,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <EditorScreen
      article={JSON.parse(article) as Article.Get}
      articleId={JSON.parse(articleId) as string}
      namespaceId=""
    />
  );
};

export default ArticleId;
