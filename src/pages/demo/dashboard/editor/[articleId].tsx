import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DemoEditorScreen, {
  Props as DemoEditorScreenProps,
} from "@/components/DemoEditorScreen";
import Article from "@/types/Article";
import {createArticle} from "@/utils/faker";

export type Props = Omit<DemoEditorScreenProps, "article"> & {
  article: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const article = createArticle();

  return {
    props: {
      article: JSON.stringify(article),
    },
  };
};

const Demo = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return <DemoEditorScreen article={JSON.parse(article) as Article.Get} />;
};

export default Demo;
