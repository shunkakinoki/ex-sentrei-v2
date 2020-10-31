import {GetStaticProps, InferGetStaticPropsType} from "next";

import DashboardCustomersScreen, {
  Props as DashboardCustomersScreenProps,
} from "@/components/DashboardCustomersScreen";
import {totalCustomerPages} from "@/const/demo";
import Customer from "@/types/Customer";
import {createCustomers} from "@/utils/faker";

export type Props = Omit<
  DashboardCustomersScreenProps,
  "customers" | "current" | "total" | "namespaceId"
> & {
  customers: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async () => {
  const customers = createCustomers();

  return {
    props: {
      customers: JSON.stringify(customers),
    },
    revalidate: 300,
  };
};

const Dashboard = ({
  customers,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DashboardCustomersScreen
      customers={JSON.parse(customers) as Customer[]}
      current={1}
      total={totalCustomerPages}
      namespaceId=""
    />
  );
};

export default Dashboard;
