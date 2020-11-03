import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";

import SpaceScreen, {Props as SpaceScreenProps} from "@/components/SpaceScreen";
import {totalArticlePages} from "@/const/demo";
import Article from "@/types/Article";
import Profile from "@/types/Profile";
import Space from "@/types/Space";
import {createAuthor, createArticles, createSpace} from "@/utils/faker";

export type Props = Omit<
  SpaceScreenProps,
  "author" | "articles" | "space" | "total"
> & {
  articles: string;
  author: string;
  space: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  res,
  req,
}: // eslint-disable-next-line @typescript-eslint/require-await
GetServerSidePropsContext) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1, stale-while-revalidate=60",
  );

  if (
    req.headers.host?.endsWith(".vercel.app") ||
    req.headers.host === "localhost:3000" ||
    req.headers.host === "sentrei.com"
  ) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  const author = createAuthor();
  const articles = createArticles();
  const space = createSpace();

  if (req.headers.host === "demo.sentrei.com") {
    return {
      props: {
        author: JSON.stringify(author),
        articles: JSON.stringify(articles),
        space: JSON.stringify(space),
        current: 1,
        namespaceId: req.headers.host.split(".")[0],
      },
    };
  }

  return {
    redirect: {
      destination: "https://sentrei.com",
      permanent: false,
    },
  };
};

const Index = ({
  author,
  articles,
  space,
  current,
  namespaceId,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  return (
    <SpaceScreen
      author={JSON.parse(author) as Profile.Get}
      articles={JSON.parse(articles) as Article.Get[]}
      space={JSON.parse(space) as Space.Get}
      current={current}
      total={totalArticlePages}
      namespaceId={namespaceId}
    />
  );
};

export default Index;
