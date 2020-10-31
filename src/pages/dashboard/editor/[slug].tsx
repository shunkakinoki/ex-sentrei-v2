import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import EditorScreen, {
  Props as EditorScreenProps,
} from "@/components/EditorScreen";
import Article from "@/types/Article";
import {createArticle} from "@/utils/faker";

export type Props = Omit<EditorScreenProps, "article" | "namespaceId"> & {
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

const Slug = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <EditorScreen article={JSON.parse(article) as Article} namespaceId="" />
  );
};

export default Slug;
