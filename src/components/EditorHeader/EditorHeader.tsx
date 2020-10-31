import Link from "next/link";

import EditorHeaderSwitch from "@/components/EditorHeaderSwitch";

export interface Props {
  namespaceId: string;
}

export default function EditorHeader({namespaceId}: Props): JSX.Element {
  return (
    <div className="relative z-20">
      <div className="px-4 mx-auto sm:px-6">
        <div className="flex justify-between py-6 border-b-2 border-gray-100 i item-center md:justify-start md:space-x-10">
          <Link
            href={`${namespaceId !== "" ? "/" : ""}${namespaceId}/dashboard`}
          >
            <a className="inline-flex items-center p-2 text-gray-500 rounded-full md:p-3 hover:bg-pink-50">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
          </Link>
          <div className="lg:w-0 lg:flex-1" />
          <a className="inline-flex items-center p-2 text-gray-500 rounded-full md:p-3 hover:bg-pink-50">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </a>
          <EditorHeaderSwitch />
          <span className="inline-flex rounded-md shadow-sm">
            <Link href="/demo/dashboard">
              <a className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-pink-400 border border-transparent rounded-md hover:bg-pink-500 focus:outline-none focus:border-pink-800 focus:shadow-outline-pink active:bg-pink-700">
                Save
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
