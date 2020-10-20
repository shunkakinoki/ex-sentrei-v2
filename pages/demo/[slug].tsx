import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";
import ArticleScreen, {
  Props as ArticleScreenProps,
} from "@/components/ArticleScreen";
import Article from "@/types/Article";
import Author from "@/types/Author";
import {createArticle, createAuthors} from "@/utils/faker";

export type Props = Omit<ArticleScreenProps, "article" | "authors"> & {
  article: string;
  authors: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const article = createArticle();
  const authors = createAuthors();

  return {
    props: {
      article: JSON.stringify(article),
      authors: JSON.stringify(authors),
    },
    revalidate: 300,
  };
};

const Slug = ({
  article,
  authors,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <ArticleScreen
      article={JSON.parse(article) as Article}
      authors={JSON.parse(authors) as Author[]}
    />
  );
};

export default Slug;
