import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DemoSpaceScreen, {
  Props as DemoSpaceScreenProps,
} from "@/components/DemoSpaceScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import Profile from "@/types/Profile";
import {createAuthor, createArticles, createSpace} from "@/utils/faker";

export type Props = Omit<
  DemoSpaceScreenProps,
  "author" | "articles" | "current" | "total"
> & {
  articles: string;
  author: string;
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
  const author = createAuthor();
  const articles = createArticles();
  const space = createSpace();

  return {
    props: {
      author: JSON.stringify(author),
      articles: JSON.stringify(articles),
      space,
      current: JSON.stringify(params?.num),
    },
  };
};

const Num = ({
  author,
  articles,
  space,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoSpaceScreen
      author={JSON.parse(author) as Profile.Get}
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
