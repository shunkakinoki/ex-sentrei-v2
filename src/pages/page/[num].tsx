import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";

import SpaceScreen, {Props as SpaceScreenProps} from "@/components/SpaceScreen";
import {totalArticlePages} from "@/const/demo";
import {getAdminArticles} from "@/servicesAdmin/Article";
import {getAdminNamespace} from "@/servicesAdmin/Namespace";
import {getAdminSpace} from "@/servicesAdmin/Space";
import Article from "@/types/Article";
import Space from "@/types/Space";
import {createArticles, createSpace} from "@/utils/faker";

export type Props = Omit<
  SpaceScreenProps,
  "articles" | "namespaceId" | "space" | "total"
> & {
  articles: string;
  current: number;
  space: string;
  total: number;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  res,
  req,
  params,
}: // eslint-disable-next-line @typescript-eslint/require-await
GetServerSidePropsContext) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1, stale-while-revalidate=30",
  );

  if (
    req.headers.host === "sentrei.com" ||
    req.headers.host?.endsWith(".vercel.app")
  ) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  if (req.headers.host === "demo.sentrei.com") {
    const articles = createArticles();
    const space = createSpace();

    return {
      props: {
        articles: JSON.stringify(articles),
        current: Number(params?.num) * 1,
        space: JSON.stringify(space),
        total: totalArticlePages,
      },
    };
  }

  try {
    let namespaceId = "";

    if (req.headers.host?.endsWith(".sentrei.com")) {
      namespaceId = req.headers.host?.replace(".sentrei.com", "");
    } else if (req.headers.host === "localhost:3000") {
      namespaceId = "shunkakinoki";
    }

    const namespace = await getAdminNamespace(namespaceId);

    if (!namespace?.modelId) {
      throw new Error(`No modelId in namespace ${namespaceId}`);
    }

    if (namespace.model === "profiles") {
      return {
        notFound: true,
      };
    }

    const articlesReq = getAdminArticles({
      end: 10,
      limit: 6,
      spaceId: namespace?.modelId,
      start: 0,
    });
    const spaceReq = getAdminSpace(namespace.modelId);

    const [articles, space] = await Promise.all([articlesReq, spaceReq]);
    const totalArticleCount = space?.articleCount
      ? Math.floor(space?.articleCount / 6) + 1
      : 0;

    return {
      props: {
        articles: JSON.stringify(articles),
        current: Number(params?.num) * 1,
        space: JSON.stringify(space),
        total: totalArticleCount,
      },
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return {
    redirect: {
      destination: "https://sentrei.com",
      permanent: false,
    },
  };
};

const Num = ({
  articles,
  current,
  space,
  total,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  return (
    <SpaceScreen
      articles={JSON.parse(articles) as Article.Get[]}
      space={JSON.parse(space) as Space.Get}
      current={current}
      total={total}
      namespaceId=""
    />
  );
};

export default Num;
