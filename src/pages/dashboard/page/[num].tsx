import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DashboardScreen, {
  Props as DashboardScreenProps,
} from "@/components/DashboardScreen";
import {totalDashboardPages} from "@/const/demo";
import Article from "@/types/Article";
import {createArticles, createBlog} from "@/utils/faker";

export type Props = Omit<
  DashboardScreenProps,
  "articles" | "current" | "total" | "namespaceId"
> & {
  articles: string;
  current: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = new Array(totalDashboardPages).fill(undefined).map((_, i) => {
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
  const articles = createArticles(
    params?.num !== totalDashboardPages.toString()
      ? 6
      : Math.floor(Math.random() * 3) + 1,
  );
  const blog = createBlog();

  return {
    props: {
      articles: JSON.stringify(articles),
      blog,
      current: JSON.stringify(params?.num),
    },
  };
};

const Num = ({
  articles,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DashboardScreen
      articles={JSON.parse(articles) as Article.Get[]}
      current={
        /* Multiply one to convert to integer */
        (JSON.parse(current) as number) * 1
      }
      total={totalDashboardPages}
      namespaceId=""
    />
  );
};

export default Num;
