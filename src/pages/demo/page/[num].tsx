import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DemoBlogScreen, {
  Props as DemoBlogScreenProps,
} from "@/components/DemoBlogScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import Profile from "@/types/Profile";
import {createAuthor, createArticles, createBlog} from "@/utils/faker";

export type Props = Omit<
  DemoBlogScreenProps,
  "author" | "articles" | "current" | "total"
> & {
  author: string;
  articles: string;
  current: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = new Array(totalArticlePages).fill(undefined).map((_, i) => {
    return {
      params: {
        num: (i + 1).toString(),
      },
    };
  });

  return {paths, fallback: false};
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  const author = createAuthor();
  const articles = createArticles();
  const blog = createBlog();

  return {
    props: {
      author: JSON.stringify(author),
      articles: JSON.stringify(articles),
      blog,
      current: JSON.stringify(params?.num),
    },
  };
};

const Num = ({
  author,
  articles,
  blog,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoBlogScreen
      author={JSON.parse(author) as Profile.Get}
      articles={JSON.parse(articles) as Article.Get[]}
      blog={blog}
      current={
        /* Multiply one to convert to integer */
        (JSON.parse(current) as number) * 1
      }
      total={totalArticlePages}
    />
  );
};

export default Num;
