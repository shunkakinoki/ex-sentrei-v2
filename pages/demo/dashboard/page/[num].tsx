import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DemoDashboardScreen, {
  Props as DemoDashboardScreenProps,
} from "@/components/DemoDashboardScreen";
import {totalPages} from "@/const/demo";
import Article from "@/types/Article";
import {createArticles, createBlog} from "@/utils/faker";

export type Props = Omit<
  DemoDashboardScreenProps,
  "articles" | "current" | "total"
> & {
  articles: string;
  current: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = new Array(totalPages).fill(undefined).map((_, i) => {
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
    params?.num === totalPages.toString()
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
    <DemoDashboardScreen
      articles={JSON.parse(articles) as Article[]}
      current={
        /* Multiply one to convert to integer */
        (JSON.parse(current) as number) * 1
      }
      total={totalPages}
    />
  );
};

export default Num;
