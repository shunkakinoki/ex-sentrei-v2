import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DemoArticleScreen, {
  Props as DemoArticleScreenProps,
} from "@/components/DemoArticleScreen";
import Article from "@/types/Article";
import Profile from "@/types/Profile";
import {createArticle, createArticles, createAuthors} from "@/utils/faker";

export type Props = Omit<
  DemoArticleScreenProps,
  "authors" | "article" | "moreArticles"
> & {
  article: string;
  authors: string;
  moreArticles: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const authors = createAuthors();
  const article = createArticle();
  const articles = createArticles(2);

  return {
    props: {
      article: JSON.stringify(article),
      authors: JSON.stringify(authors),
      moreArticles: JSON.stringify(articles),
    },
  };
};

const Slug = ({
  authors,
  article,
  moreArticles,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoArticleScreen
      authors={JSON.parse(authors) as Profile.Get[]}
      article={JSON.parse(article) as Article.Get}
      moreArticles={JSON.parse(moreArticles) as Article.Get[]}
    />
  );
};

export default Slug;
