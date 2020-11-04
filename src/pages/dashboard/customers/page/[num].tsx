import {GetStaticProps, InferGetStaticPropsType, GetStaticPaths} from "next";

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
  current: string;
  customers: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = new Array(totalCustomerPages).fill(undefined).map((_, i) => {
    return {
      params: {
        num: (i + 1).toString(),
      },
    };
  });

  return {fallback: false, paths};
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  const customers = createCustomers(
    params?.num !== totalCustomerPages.toString()
      ? 10
      : Math.floor(Math.random() * 3) + 1,
  );

  return {
    props: {
      current: JSON.stringify(params?.num),
      customers: JSON.stringify(customers),
    },
    revalidate: 30,
  };
};

const Num = ({
  customers,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DashboardCustomersScreen
      customers={JSON.parse(customers) as Customer[]}
      current={
        /* Multiply one to convert to integer */
        (JSON.parse(current) as number) * 1
      }
      total={totalCustomerPages}
      namespaceId=""
    />
  );
};

export default Num;
