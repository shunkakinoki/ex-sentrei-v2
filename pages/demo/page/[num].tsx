import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";
import DemoScreen, {Props as DemoScreenProps} from "@/components/DemoScreen";
import Article from "@/types/Article";
import {createArticles, createAuthor, createBlog} from "@/utils/faker";
import {totalPages} from "@/const/demo";

export type Props = Omit<DemoScreenProps, "articles" | "current"> & {
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
  const articles = createArticles();
  const author = createAuthor();
  const blog = createBlog();

  return {
    props: {
      articles: JSON.stringify(articles),
      author,
      blog,
      current: JSON.stringify(params?.num),
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
      current={JSON.parse(current) as number}
    />
  );
};

export default Demo;
