import {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";

import ArticleScreen, {
  Props as ArticleScreenProps,
} from "@/components/ArticleScreen";
import {getAdminArticle, getAdminArticles} from "@/servicesAdmin/Article";
import {getAdminProfile} from "@/servicesAdmin/Profile";
import Article from "@/types/Article";
import Profile from "@/types/Profile";

export type Props = Omit<
  ArticleScreenProps,
  "authors" | "article" | "moreArticles" | "namespaceId"
> & {
  article: string;
  authors: string;
  moreArticles: string;
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
    const article = await getAdminArticle(String(params?.slug));

    if (!article?.authorUids) {
      return {
        notFound: true,
      };
    }

    const author = await getAdminProfile(article?.authorUids[0]);
    const articles = await getAdminArticles({
      limit: 2,
      spaceId: article.spaceId,
      start: article.spaceNum ? article.spaceNum + 1 : undefined,
    });

    return {
      props: {
        article: JSON.stringify(article),
        authors: JSON.stringify([author]),
        moreArticles: JSON.stringify(articles),
      },
      revalidate: 30,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

const Slug = ({
  article,
  authors,
  moreArticles,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <ArticleScreen
      article={JSON.parse(article) as Article.Get}
      authors={JSON.parse(authors) as Profile.Get[]}
      moreArticles={JSON.parse(moreArticles) as Article.Get[]}
      namespaceId=""
    />
  );
};

export default Slug;
