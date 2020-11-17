import {GetStaticProps, InferGetStaticPropsType} from "next";

import DashboardSalesScreen, {
  Props as DashboardSalesScreenProps,
} from "@/components/DashboardSalesScreen";
import Sales from "@/types/Sales";
import {createSales} from "@/utils/faker";

export type Props = Omit<
  DashboardSalesScreenProps,
  "current" | "namespaceId" | "sales" | "total"
> & {
  sales: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const sales = createSales();

  return {
    props: {
      sales: JSON.stringify(sales),
    },
    revalidate: 30,
  };
};

const Dashboard = ({
  sales,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DashboardSalesScreen
      current={1}
      total={1}
      sales={JSON.parse(sales) as Sales}
      namespaceId=""
    />
  );
};

export default Dashboard;
