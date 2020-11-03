import {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";

import DashboardScreen, {
  Props as DashboardScreenProps,
} from "@/components/DashboardScreen";
import {totalDashboardPages} from "@/const/demo";

export type Props = Omit<
  DashboardScreenProps,
  "articles" | "current" | "total" | "namespaceId"
> & {
  current: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = new Array(totalDashboardPages).fill(undefined).map((_, i) => {
    return {
      params: {
        num: (i + 1).toString(),
      },
    };
  });

  return {fallback: false, paths};
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: // eslint-disable-next-line @typescript-eslint/require-await
GetStaticPropsContext) => {
  return {
    props: {
      current: JSON.stringify(params?.num),
    },
  };
};

const Num = ({
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DashboardScreen
      articles={[]}
      current={
        /* Multiply one to convert to integer */
        (JSON.parse(current) as number) * 1
      }
      total={0}
      namespaceId=""
    />
  );
};

export default Num;
