import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DemoArticleScreen, {
  Props as DemoArticleScreenProps,
} from "@/components/DemoArticleScreen";
import Article from "@/types/Article";
import {createArticle, createArticles} from "@/utils/faker";

export type Props = Omit<DemoArticleScreenProps, "article" | "more"> & {
  article: string;
  more: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const article = createArticle();
  const more = createArticles(2);

  return {
    props: {
      article: JSON.stringify(article),
      more: JSON.stringify(more),
    },
    revalidate: 300,
  };
};

const Slug = ({
  article,
  more,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoArticleScreen
      article={JSON.parse(article) as Article.Get}
      more={JSON.parse(more) as Article.Get[]}
    />
  );
};

export default Slug;
