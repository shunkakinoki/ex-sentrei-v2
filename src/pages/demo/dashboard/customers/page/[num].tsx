import {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";

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
  current: string;
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

  return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: // eslint-disable-next-line @typescript-eslint/require-await
GetStaticPropsContext) => {
  const customers = createCustomers(
    params?.num !== totalCustomerPages.toString()
      ? 10
      : Math.floor(Math.random() * 3) + 1,
  );

  return {
    props: {
      customers: JSON.stringify(customers),
      current: JSON.stringify(params?.num),
    },
  };
};

const Num = ({
  customers,
  current,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <DemoDashboardCustomersScreen
      customers={JSON.parse(customers) as Customer[]}
      current={
        /* Multiply one to convert to integer */
        (JSON.parse(current) as number) * 1
      }
      total={totalCustomerPages}
    />
  );
};

export default Num;
