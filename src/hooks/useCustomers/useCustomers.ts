import useSWR from "swr";

import {getCustomers} from "@/services/Customer";
import Customer, {CustomerQuery} from "@/types/Customer";

const getCustomersFetcher = async (
  _: string,
  spaceId: string,
  start: number,
  end: number,
) => {
  return getCustomers({end, spaceId, start});
};

export default function useCustomers(
  namespaceId: string,
  query: CustomerQuery,
  initialData?: Customer.Get[],
): {
  customers: Customer.Get[] | null | undefined;
} {
  const {data: customers} = useSWR(
    // eslint-disable-next-line no-nested-ternary
    namespaceId === "demo"
      ? null
      : query
      ? ["customers", query.spaceId, query.start, query.end]
      : null,
    getCustomersFetcher,
    {initialData, revalidateOnMount: true},
  );

  return {customers};
}
