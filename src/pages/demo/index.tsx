import {GetStaticProps, InferGetStaticPropsType} from "next";

import DemoSpaceScreen, {
  Props as DemoSpaceScreenProps,
} from "@/components/DemoSpaceScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import Space from "@/types/Space";
import {createArticles, createSpace} from "@/utils/faker";

export type Props = Omit<
  DemoSpaceScreenProps,
  "articles" | "space" | "total"
> & {
  articles: string;
  space: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = createArticles();
  const space = createSpace();

  return {
    props: {
      articles: JSON.stringify(articles),
      current: 1,
      space: JSON.stringify(space),
    },
  };
};

const Demo = ({
  articles,
  space,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoSpaceScreen
      articles={JSON.parse(articles) as Article.Get[]}
      space={JSON.parse(space) as Space.Get}
      current={current}
      total={totalArticlePages}
    />
  );
};

export default Demo;
