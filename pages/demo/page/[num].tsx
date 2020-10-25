import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DemoBlogScreen, {
  Props as DemoBlogScreenProps,
} from "@/components/DemoBlogScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import {createArticles, createBlog} from "@/utils/faker";

export type Props = Omit<
  DemoBlogScreenProps,
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

  return {paths, fallback: false};
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  const articles = createArticles();
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
  blog,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoBlogScreen
      articles={JSON.parse(articles) as Article[]}
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
