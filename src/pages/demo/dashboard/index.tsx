import {GetStaticProps, InferGetStaticPropsType} from "next";

import DemoDashboardScreen, {
  Props as DemoDashboardScreenProps,
} from "@/components/DemoDashboardScreen";
import {totalDashboardPages} from "@/const/demo";
import Article from "@/types/Article";
import {createArticles} from "@/utils/faker";

export type Props = Omit<
  DemoDashboardScreenProps,
  "articles" | "current" | "total"
> & {
  articles: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = createArticles();
  const firstArticle = {
    ...articles[0],
    status: "preview",
  };
  const firstPageArticles = [
    firstArticle,
    ...articles.slice(1, articles.length),
  ];

  return {
    props: {
      articles: JSON.stringify(firstPageArticles),
    },
    revalidate: 300,
  };
};

const Dashboard = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoDashboardScreen
      articles={JSON.parse(articles) as Article.Get[]}
      current={1}
      total={totalDashboardPages}
    />
  );
};

export default Dashboard;
