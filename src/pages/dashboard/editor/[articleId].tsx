import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import EditorScreen, {
  Props as EditorScreenProps,
} from "@/components/EditorScreen";

export type Props = Omit<EditorScreenProps, "article" | "namespaceId"> & {
  articleId: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  return {
    props: {
      articleId: JSON.stringify(params?.articleId),
    },
  };
};

const Slug = ({
  articleId,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <EditorScreen
      article={undefined}
      articleId={JSON.parse(articleId) as string}
      namespaceId=""
    />
  );
};

export default Slug;
