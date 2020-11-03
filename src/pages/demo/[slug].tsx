import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DemoArticleScreen, {
  Props as DemoArticleScreenProps,
} from "@/components/DemoArticleScreen";
import Article from "@/types/Article";
import Profile from "@/types/Profile";
import {createArticle, createArticles, createAuthors} from "@/utils/faker";

export type Props = Omit<
  DemoArticleScreenProps,
  "authors" | "article" | "more"
> & {
  article: string;
  authors: string;
  more: string;
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
  const more = createArticles(2);

  return {
    props: {
      article: JSON.stringify(article),
      authors: JSON.stringify(authors),
      more: JSON.stringify(more),
    },
    revalidate: 300,
  };
};

const Slug = ({
  authors,
  article,
  more,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoArticleScreen
      authors={JSON.parse(authors) as Profile.Get[]}
      article={JSON.parse(article) as Article.Get}
      more={JSON.parse(more) as Article.Get[]}
    />
  );
};

export default Slug;
