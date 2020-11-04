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
    "public, s-maxage=1, stale-while-revalidate=30",
  );

  if (req.headers.host === "sentrei.com") {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  if (req.headers.host === "demo.sentrei.com") {
    const author = createAuthor();
    const articles = createArticles();
    const space = createSpace();

    return {
      props: {
        articles: JSON.stringify(articles),
        author: JSON.stringify(author),
        current: 1,
        namespaceId: req.headers.host.split(".")[0],
        space: JSON.stringify(space),
      },
    };
  }

  if (req.headers.host?.endsWith(".sentrei.com")) {
    const namespaceId = req.headers.host?.replace(".sentrei.com", "");
    const author = createAuthor();

    try {
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
        spaceId: namespace?.modelId,
        start: 0,
      });
      const spaceReq = getAdminSpace(namespace.modelId);

      const [articles, space] = await Promise.all([articlesReq, spaceReq]);

      return {
        props: {
          articles: JSON.stringify(articles),
          author: JSON.stringify(author),
          current: 1,
          namespaceId,
          space: JSON.stringify(space),
        },
      };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
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
