import {GetStaticProps, InferGetStaticPropsType} from "next";

import DemoSpaceScreen, {
  Props as DemoSpaceScreenProps,
} from "@/components/DemoSpaceScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import Profile from "@/types/Profile";
import Space from "@/types/Space";
import {createAuthor, createArticles, createSpace} from "@/utils/faker";

export type Props = Omit<
  DemoSpaceScreenProps,
  "author" | "articles" | "space" | "total"
> & {
  articles: string;
  author: string;
  space: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const author = createAuthor();
  const articles = createArticles();
  const space = createSpace();

  return {
    props: {
      articles: JSON.stringify(articles),
      author: JSON.stringify(author),
      current: 1,
      space: JSON.stringify(space),
    },
  };
};

const Demo = ({
  author,
  articles,
  space,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoSpaceScreen
      author={JSON.parse(author) as Profile.Get}
      articles={JSON.parse(articles) as Article.Get[]}
      space={JSON.parse(space) as Space.Get}
      current={current}
      total={totalArticlePages}
    />
  );
};

export default Demo;
