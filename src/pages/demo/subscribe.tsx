import {GetStaticProps, InferGetStaticPropsType} from "next";

import DemoSubscribeScreen, {
  Props as DemoSubscribeScreenProps,
} from "@/components/DemoSubscribeScreen";
import Space from "@/types/Space";
import {createSpace} from "@/utils/faker";

export type Props = Omit<
  DemoSubscribeScreenProps,
  "namespaceId" | "spaceId" | "space"
> & {
  space: string;
};
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const space = createSpace();

  return {
    props: {
      space: JSON.stringify(space),
    },
  };
};

const Subscribe = ({
  space,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return <DemoSubscribeScreen space={JSON.parse(space) as Space.Get} />;
};

export default Subscribe;
