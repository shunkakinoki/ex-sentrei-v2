import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DemoArticleScreen, {
  Props as DemoArticleScreenProps,
} from "@/components/DemoArticleScreen";
import Article from "@/types/Article";
import Author from "@/types/Author";
import {createArticle, createAuthors, createArticles} from "@/utils/faker";

export type Props = Omit<
  DemoArticleScreenProps,
  "article" | "authors" | "more"
> & {
  article: string;
  authors: string;
  more: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "unstable_blocking",
  };
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const article = createArticle();
  const authors = createAuthors();
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
  article,
  authors,
  more,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoArticleScreen
      article={JSON.parse(article) as Article}
      authors={JSON.parse(authors) as Author[]}
      more={JSON.parse(more) as Article[]}
    />
  );
};

export default Slug;
