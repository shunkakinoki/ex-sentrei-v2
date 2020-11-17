import Sales from "@/types/Sales";

export type Props = Sales;

export default function DashboardSalesHero({
  all,
  month,
  confirmed,
}: Props): JSX.Element {
  return (
    <div className="container max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <h2 className="text-lg font-medium leading-6 text-gray-900">Overview</h2>
      <div
        className="grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3"
        x-max="1"
      >
        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-gray-400"
                  x-description="Heroicon name: scale"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div className="flex-1 w-0 ml-5">
                <dl>
                  <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                    All-time sales
                  </dt>
                  <dd>
                    <div className="text-lg font-medium leading-7 text-gray-900">
                      ${all.toLocaleString()}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="px-5 py-3 bg-gray-50">
            <div className="text-sm leading-5">
              <a
                href="#"
                className="font-medium text-pink-600 transition duration-150 ease-in-out hover:text-pink-900"
              >
                View all
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-gray-400"
                  x-description="Heroicon name: refresh"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div className="flex-1 w-0 ml-5">
                <dl>
                  <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                    This month&apos;s sales
                  </dt>
                  <dd>
                    <div className="text-lg font-medium leading-7 text-gray-900">
                      ${month.toLocaleString()}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="px-5 py-3 bg-gray-50">
            <div className="text-sm leading-5">
              <a
                href="#"
                className="font-medium text-pink-600 transition duration-150 ease-in-out hover:text-pink-900"
              >
                View all
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-gray-400"
                  x-description="Heroicon name: check-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1 w-0 ml-5">
                <dl>
                  <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                    Confirmed sales
                  </dt>
                  <dd>
                    <div className="text-lg font-medium leading-7 text-gray-900">
                      ${confirmed.toLocaleString()}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="px-5 py-3 bg-gray-50">
            <div className="text-sm leading-5">
              <a
                href="#"
                className="font-medium text-pink-600 transition duration-150 ease-in-out hover:text-pink-900"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
