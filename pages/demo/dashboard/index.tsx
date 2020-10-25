import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

import DemoDashboardScreen, {
  Props as DemoDashboardScreenProps,
} from "@/components/DemoDashboardScreen";
import Article from "@/types/Article";
import {createArticles} from "@/utils/faker";

export type Props = Omit<DemoDashboardScreenProps, "articles"> & {
  articles: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "unstable_blocking",
  };
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = createArticles();

  return {
    props: {
      articles: JSON.stringify(articles),
    },
    revalidate: 300,
  };
};

const Dashboard = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return <DemoDashboardScreen articles={JSON.parse(articles) as Article[]} />;
};

export default Dashboard;
