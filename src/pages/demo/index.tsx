import {GetStaticProps, InferGetStaticPropsType} from "next";

import DemoBlogScreen, {
  Props as DemoBlogScreenProps,
} from "@/components/DemoBlogScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import Space from "@/types/Space";
import {createArticles, createBlog} from "@/utils/faker";

export type Props = Omit<DemoBlogScreenProps, "articles" | "blog" | "total"> & {
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
    <DemoBlogScreen
      articles={JSON.parse(articles) as Article.Get[]}
      blog={JSON.parse(blog) as Space.Get}
      current={current}
      total={totalArticlePages}
    />
  );
};

export default Demo;
