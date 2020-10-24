import {GetStaticProps, InferGetStaticPropsType} from "next";

import DemoScreen, {Props as DemoScreenProps} from "@/components/DemoScreen";
import Article from "@/types/Article";
import {createArticles, createAuthor, createBlog} from "@/utils/faker";

export type Props = Omit<DemoScreenProps, "articles"> & {
  articles: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = createArticles();
  const author = createAuthor();
  const blog = createBlog();

  return {
    props: {
      articles: JSON.stringify(articles),
      author,
      blog,
      current: 1,
    },
  };
};

const Demo = ({
  articles,
  author,
  blog,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoScreen
      articles={JSON.parse(articles) as Article[]}
      author={author}
      blog={blog}
      current={current}
    />
  );
};

export default Demo;
