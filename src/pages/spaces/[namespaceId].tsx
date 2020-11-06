import {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from "next";

import SpaceScreen, {Props as SpaceScreenProps} from "@/components/SpaceScreen";
import {getAdminArticles} from "@/servicesAdmin/Article";
import {getAdminNamespace} from "@/servicesAdmin/Namespace";
import {getAdminSpace} from "@/servicesAdmin/Space";
import Article from "@/types/Article";
import Space from "@/types/Space";

export type Props = Omit<
  SpaceScreenProps,
  "articles" | "current" | "namespaceId" | "space" | "total"
> & {
  articles: string;
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
}: // eslint-disable-next-line @typescript-eslint/require-await
GetStaticPropsContext) => {
  try {
    const namespaceId = String(params?.namespaceId);

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
      limit: 6,
      spaceId: namespace?.modelId,
      status: "published",
    });
    const spaceReq = getAdminSpace(namespace.modelId);

    const [articles, space] = await Promise.all([articlesReq, spaceReq]);

    return {
      props: {
        articles: JSON.stringify(articles),
        space: JSON.stringify(space),
      },
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

const NamespaceId = ({
  articles,
  space,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <SpaceScreen
      articles={JSON.parse(articles) as Article.Get[]}
      space={JSON.parse(space) as Space.Get}
      namespaceId=""
    />
  );
};

export default NamespaceId;
