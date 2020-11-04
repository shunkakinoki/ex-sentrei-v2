import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DemoSpaceScreen, {
  Props as DemoSpaceScreenProps,
} from "@/components/DemoSpaceScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import {createArticles, createSpace} from "@/utils/faker";

export type Props = Omit<
  DemoSpaceScreenProps,
  "articles" | "current" | "total"
> & {
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

  return {fallback: false, paths};
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  const articles = createArticles();
  const space = createSpace();

  return {
    props: {
      articles: JSON.stringify(articles),
      current: JSON.stringify(params?.num),
      space,
    },
  };
};

const Num = ({
  articles,
  space,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoSpaceScreen
      articles={JSON.parse(articles) as Article.Get[]}
      space={space}
      current={
        /* Multiply one to convert to integer */
        (JSON.parse(current) as number) * 1
      }
      total={totalArticlePages}
    />
  );
};

export default Num;
