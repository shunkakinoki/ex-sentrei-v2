import {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";

import ArticleScreen, {
  Props as ArticleScreenProps,
} from "@/components/ArticleScreen";
import {getAdminArticle} from "@/servicesAdmin/Article";
import {getAdminProfile} from "@/servicesAdmin/Profile";
import Article from "@/types/Article";
import Profile from "@/types/Profile";

export type Props = Omit<
  ArticleScreenProps,
  "authors" | "article" | "more" | "namespaceId"
> & {
  article: string;
  authors: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  try {
    const article = await getAdminArticle(String(params?.slugId));
    if (!article?.authorUids) {
      return {
        notFound: true,
      };
    }
    const author = await getAdminProfile(article?.authorUids[0]);

    return {
      props: {
        article: JSON.stringify(article),
        authors: JSON.stringify([author]),
      },
      revalidate: 30,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

const SlugId = ({
  article,
  authors,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <ArticleScreen
      article={JSON.parse(article) as Article.Get}
      authors={JSON.parse(authors) as Profile.Get[]}
      more={[]}
      namespaceId=""
    />
  );
};

export default SlugId;
