import DashboardSalesTableItem from "@/components/DashboardSalesTableItem";
import PaginationBase, {
  Props as PaginationBaseProps,
} from "@/components/PaginationBase";

export interface Props extends Omit<PaginationBaseProps, "pathname"> {
  namespaceId: string;
}

export default function DashboardSalesTable({
  current,
  namespaceId,
  total,
}: Props): JSX.Element {
  return (
    <div className="container max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <h2 className="mt-8 text-lg font-medium leading-6 text-gray-900">
        Recent activity
      </h2>
      <div className="hidden sm:block">
        <div className="flex flex-col mt-2">
          <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                    Transaction
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                    Amount
                  </th>
                  <th className="hidden px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50 md:block">
                    Status
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200" x-max="1">
                <DashboardSalesTableItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <PaginationBase
        current={current}
        pathname={`/dashboard${namespaceId === "" ? "" : "/"}${namespaceId}`}
        total={total}
      />
    </div>
  );
}
