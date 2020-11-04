import {GetStaticProps, InferGetStaticPropsType} from "next";

import DemoDashboardCustomersScreen, {
  Props as DemoDashboardCustomersScreenProps,
} from "@/components/DemoDashboardCustomersScreen";
import {totalCustomerPages} from "@/const/demo";
import Customer from "@/types/Customer";
import {createCustomers} from "@/utils/faker";

export type Props = Omit<
  DemoDashboardCustomersScreenProps,
  "customers" | "current" | "total"
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
  };
};

const Dashboard = ({
  customers,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoDashboardCustomersScreen
      customers={JSON.parse(customers) as Customer[]}
      current={1}
      total={totalCustomerPages}
    />
  );
};

export default Dashboard;
