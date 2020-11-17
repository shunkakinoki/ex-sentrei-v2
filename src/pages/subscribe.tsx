import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";

import SubscribeScreen, {
  Props as SubscribeScreenProps,
} from "@/components/SubscribeScreen";
import {getAdminNamespace} from "@/servicesAdmin/Namespace";
import {getAdminSpace} from "@/servicesAdmin/Space";
import Space from "@/types/Space";
import {createSpace} from "@/utils/faker";

export type Props = Omit<
  SubscribeScreenProps,
  "namespaceId" | "spaceId" | "space"
> & {
  namespaceId: string;
  space: string;
  spaceId: string;
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
    const space = createSpace();

    return {
      props: {
        namespaceId: JSON.stringify("demo"),
        space: JSON.stringify(space),
        spaceId: JSON.stringify("demo"),
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

    const space = await getAdminSpace(namespace?.modelId);

    return {
      props: {
        namespaceId: JSON.stringify(""),
        space: JSON.stringify(space),
        spaceId: JSON.stringify(namespace?.modelId),
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

const Subscribe = ({
  namespaceId,
  spaceId,
  space,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  return (
    <SubscribeScreen
      namespaceId={JSON.parse(namespaceId) as string}
      spaceId={JSON.parse(spaceId) as string}
      space={JSON.parse(space) as Space.Get}
    />
  );
};

export default Subscribe;
