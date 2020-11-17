import DashboardCustomersTableItem from "@/components/DashboardCustomersTableItem";
import PaginationBase, {
  Props as PaginationBaseProps,
} from "@/components/PaginationBase";
import Customer from "@/types/Customer";

export interface Props extends Omit<PaginationBaseProps, "pathname"> {
  customers: Customer.Get[];
  namespaceId: string;
}

export default function DashboardCustomersTable({
  customers,
  current,
  total,
  namespaceId,
}: Props): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase leading-1 md:leading-2 bg-gray-50">
                    Name
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase leading-1 md:leading-2 bg-gray-50">
                    Status
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase leading-1 md:leading-2 bg-gray-50">
                    Since
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map(customer => {
                  return (
                    <DashboardCustomersTableItem
                      key={customer.name}
                      createdAt={customer.createdAt}
                      email={customer.email}
                      image={customer.image}
                      name={customer.name}
                      status={customer.status}
                      namespaceId={namespaceId}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {customers && (
        <PaginationBase
          current={current}
          pathname={`/dashboard${
            namespaceId === "" ? "" : "/"
          }${namespaceId}/customers`}
          total={3}
        />
      )}
      {namespaceId === "demo" && total > 1 && (
        <PaginationBase
          current={current}
          pathname="/demo/dashboard/customers"
          total={total}
        />
      )}
    </div>
  );
}
