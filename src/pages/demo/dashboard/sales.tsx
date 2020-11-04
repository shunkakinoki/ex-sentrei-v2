import {GetStaticProps, InferGetStaticPropsType} from "next";

import DemoDashboardSalesScreen, {
  Props as DemoDashboardSalesScreenProps,
} from "@/components/DemoDashboardSalesScreen";
import Sales from "@/types/Sales";
import {createSales} from "@/utils/faker";

export type Props = Omit<
  DemoDashboardSalesScreenProps,
  "namespaceId" | "sales"
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
  };
};

const Dashboard = ({
  sales,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return <DemoDashboardSalesScreen sales={JSON.parse(sales) as Sales} />;
};

export default Dashboard;
