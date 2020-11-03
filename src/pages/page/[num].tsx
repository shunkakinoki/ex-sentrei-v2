import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";

import SpaceScreen, {Props as SpaceScreenProps} from "@/components/SpaceScreen";
import {getAdminArticles} from "@/servicesAdmin/Article";
import {getAdminNamespace} from "@/servicesAdmin/Namespace";
import {getAdminProfile} from "@/servicesAdmin/Profile";
import {getAdminSpace} from "@/servicesAdmin/Space";
import Article from "@/types/Article";
import Profile from "@/types/Profile";
import Space from "@/types/Space";
import {createAuthor, createArticles, createSpace} from "@/utils/faker";

export type Props = Omit<
  SpaceScreenProps,
  "author" | "articles" | "current" | "space" | "total"
> & {
  articles: string;
  author: string;
  current: string;
  space: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  res,
  req,
  params,
}: // eslint-disable-next-line @typescript-eslint/require-await
GetServerSidePropsContext) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1, stale-while-revalidate=60",
  );

  if (
    req.headers.host === "localhost:3000" ||
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
    const author = createAuthor();
    const articles = createArticles();
    const space = createSpace();

    return {
      props: {
        articles: JSON.stringify(articles),
        author: JSON.stringify(author),
        current: JSON.stringify(params?.num),
        namespaceId: JSON.stringify(req.headers.host.split(".")[0]),
        space: JSON.stringify(space),
      },
    };
  }

  if (req.headers.host?.endsWith(".sentrei.com")) {
    const namespaceId = req.headers.host?.replace(".sentrei.com", "");

    try {
      const namespace = await getAdminNamespace(namespaceId);

      if (!namespace?.modelId) {
        throw new Error(`No modelId in namespace ${namespaceId}`);
      }

      const articlesReq = getAdminArticles({
        end: 10,
        spaceId: namespace?.modelId,
        start: 0,
      });
      const profileReq = getAdminProfile(namespaceId);
      const spaceReq = getAdminSpace(namespaceId);

      const [articles, profile, space] = await Promise.all([
        articlesReq,
        profileReq,
        spaceReq,
      ]);

      return {
        props: {
          articles: JSON.stringify(articles),
          author: JSON.stringify(profile),
          current: JSON.stringify(params?.num),
          namespaceId: JSON.stringify(namespaceId),
          space: JSON.stringify(space),
        },
      };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  return {
    notFound: true,
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
      current={(JSON.parse(current) as number) * 1}
      total={0}
      namespaceId={namespaceId}
    />
  );
};

export default Index;
