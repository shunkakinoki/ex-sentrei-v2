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
import {getAdminSpace} from "@/servicesAdmin/Space";
import Article from "@/types/Article";
import Profile from "@/types/Profile";
import Space from "@/types/Space";

export type Props = Omit<
  ArticleScreenProps,
  "authors" | "article" | "moreArticles" | "namespaceId" | "space"
> & {
  article: string;
  authors: string;
  moreArticles: string;
  space: string;
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

    if (!article?.profileIds) {
      return {
        notFound: true,
      };
    }

    const authorReq = getAdminProfile(article?.profileIds[0]);
    const articlesReq = getAdminArticles({
      limit: 2,
      spaceId: article.spaceId,
      start: article.spaceNum ? article.spaceNum + 1 : undefined,
    });
    const spaceReq = getAdminSpace(article.spaceId);

    const [author, articles, space] = await Promise.all([
      authorReq,
      articlesReq,
      spaceReq,
    ]);

    return {
      props: {
        article: JSON.stringify(article),
        authors: JSON.stringify([author]),
        moreArticles: JSON.stringify(articles),
        space: JSON.stringify(space),
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
  space,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <ArticleScreen
      article={JSON.parse(article) as Article.Get}
      authors={JSON.parse(authors) as Profile.Get[]}
      moreArticles={JSON.parse(moreArticles) as Article.Get[]}
      space={JSON.parse(space) as Space.Get}
      namespaceId=""
    />
  );
};

export default Slug;
