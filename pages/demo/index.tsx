import {GetStaticProps, InferGetStaticPropsType} from "next";

import DemoScreen, {Props as DemoScreenProps} from "@/components/DemoScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import Blog from "@/types/Blog";
import {createArticles, createBlog} from "@/utils/faker";

export type Props = Omit<DemoScreenProps, "articles" | "blog" | "total"> & {
  articles: string;
  blog: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = createArticles();
  const blog = createBlog();

  return {
    props: {
      articles: JSON.stringify(articles),
      blog: JSON.stringify(blog),
      current: 1,
    },
  };
};

const Demo = ({
  articles,
  blog,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoScreen
      articles={JSON.parse(articles) as Article[]}
      blog={JSON.parse(blog) as Blog}
      current={current}
      total={totalArticlePages}
    />
  );
};

export default Demo;
