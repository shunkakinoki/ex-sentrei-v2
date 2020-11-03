import {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";

import ArticleScreen, {
  Props as ArticleScreenProps,
} from "@/components/ArticleScreen";
import {getAdminArticle} from "@/servicesAdmin/Article";
import Article from "@/types/Article";

export type Props = Omit<
  ArticleScreenProps,
  "authors" | "article" | "more" | "namespaceId"
> & {
  article: string;
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
  try {
    const article = await getAdminArticle(String(params?.articleId));

    return {
      props: {
        article: JSON.stringify(article),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

const SlugId = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <ArticleScreen
      article={JSON.parse(article) as Article.Get}
      authors={[]}
      more={[]}
      namespaceId=""
    />
  );
};

export default SlugId;
