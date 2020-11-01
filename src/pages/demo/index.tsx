import {GetStaticProps, InferGetStaticPropsType} from "next";

import DemoBlogScreen, {
  Props as DemoBlogScreenProps,
} from "@/components/DemoBlogScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import Profile from "@/types/Profile";
import Space from "@/types/Space";
import {createAuthor, createArticles, createBlog} from "@/utils/faker";

export type Props = Omit<
  DemoBlogScreenProps,
  "author" | "articles" | "blog" | "total"
> & {
  author: string;
  articles: string;
  blog: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const author = createAuthor();
  const articles = createArticles();
  const blog = createBlog();

  return {
    props: {
      author: JSON.stringify(author),
      articles: JSON.stringify(articles),
      blog: JSON.stringify(blog),
      current: 1,
    },
  };
};

const Demo = ({
  author,
  articles,
  blog,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoBlogScreen
      author={JSON.parse(author) as Profile.Get}
      articles={JSON.parse(articles) as Article.Get[]}
      blog={JSON.parse(blog) as Space.Get}
      current={current}
      total={totalArticlePages}
    />
  );
};

export default Demo;
