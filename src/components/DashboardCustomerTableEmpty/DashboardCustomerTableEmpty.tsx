import Link from "next/link";

export default function DashboardCustomerTableEmpty(): JSX.Element {
  return (
    <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-pink-100 rounded-full">
          <svg
            className="w-6 h-6 text-pink-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-2xl font-medium leading-6 text-gray-900">
            You have no customers yet.
          </h3>
          <div className="mt-4">
            <p className="leading-5 text-gray-500 text-md">
              Let&apos;s publish an article to get the party started!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <span className="flex w-full rounded-md shadow-sm">
          <Link href="/dashboard/editor">
            <a className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink sm:text-sm sm:leading-5">
              Create new article
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
}
