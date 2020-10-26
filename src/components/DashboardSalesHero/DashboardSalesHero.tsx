import Sales from "@/types/Sales";

export type Props = Sales;

export default function DashboardSalesHero({
  all,
  allConfirmed,
  month,
  monthConfirmed,
  confirmed,
}: Props): JSX.Element {
  return (
    <div className="container p-3 m-auto md:p-4 text-grey-darkest">
      <div className="flex flex-col w-full mb-8 -mx-2 md:flex-row ">
        <div className="px-4 py-2 m-2 text-center text-gray-700 bg-gray-100 md:w-1/3 rounded-xl">
          <h2 className="m-3 text-xl font-semibold leading-9 text-left text-gray-900 font-display ">
            All-time sales
          </h2>
          <div className="flex items-center justify-start mt-2 mb-1 font-display">
            <span className="flex items-center px-3 text-2xl font-medium leading-none tracking-tight text-gray-900 md:text-4xl">
              <span className="mx-2 text-xl leading-none md:text-2xl">$</span>
              <span>{all.toLocaleString()}</span>
            </span>
          </div>
          <h2 className="m-3 font-medium leading-9 text-left text-gray-700 text-md ">
            Received: $&nbsp;{allConfirmed.toLocaleString()}
          </h2>
        </div>
        <div className="px-4 py-2 m-2 text-center text-gray-700 bg-gray-100 md:w-1/3 rounded-xl">
          <h2 className="m-3 text-xl font-semibold leading-9 text-left text-gray-900 font-display ">
            This month&apos;s sales
          </h2>
          <div className="flex items-center justify-start mt-2 mb-1 font-display">
            <span className="flex items-center px-3 text-2xl font-medium leading-none tracking-tight text-gray-900 md:text-4xl">
              <span className="mx-2 text-xl leading-none md:text-2xl">$</span>
              <span>{month.toLocaleString()}</span>
            </span>
          </div>
          <h2 className="m-3 font-medium leading-9 text-left text-gray-700 text-md ">
            Received: $&nbsp;{monthConfirmed.toLocaleString()}
          </h2>
        </div>
        <div className="px-4 py-2 m-2 text-center text-gray-700 bg-gray-100 md:w-1/3 rounded-xl">
          <h2 className="m-3 text-xl font-semibold leading-9 text-left text-gray-900 font-display ">
            Confirmed sales
          </h2>
          <div className="flex items-center justify-start mt-2 mb-1 font-display">
            <span className="flex items-center px-3 text-2xl font-medium leading-none tracking-tight text-gray-900 md:text-4xl">
              <span className="mx-2 text-xl leading-none md:text-2xl">$</span>
              <span>{confirmed.toLocaleString()}</span>
            </span>
          </div>
          <div className="py-3" />
        </div>
      </div>
    </div>
  );
}
