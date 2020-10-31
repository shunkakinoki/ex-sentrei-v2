import clsx from "clsx";
import Link from "next/link";
import useSWR from "swr";

import useAuth from "@/hooks/useAuth";
import {getSpace} from "@/services/Space";
import Article from "@/types/Article";
import Space from "@/types/Space";

export interface Props
  extends Pick<
    Article.Fields,
    "date" | "pricing" | "title" | "subtitle" | "slug" | "status"
  > {
  namespaceId: string;
}

const getSpaceFetcher = async (spaceId: string) => {
  const uid = spaceId.replace("spaces/", "");
  return getSpace(uid);
};

export default function DashboardTableItem({
  date,
  pricing,
  title,
  subtitle,
  slug,
  status,
  namespaceId,
}: Props): JSX.Element {
  const {authState} = useAuth();

  const {data: space} = useSWR(
    // eslint-disable-next-line no-nested-ternary
    namespaceId === "demo"
      ? null
      : authState?.uid
      ? `spaces/${authState.uid}`
      : null,
    getSpaceFetcher,
  );

  return (
    <div className="flex flex-col w-full md:flex md:flex-row md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 truncate-2-lines ">
          {title}
        </h2>
        <h4 className="mt-2 mb-2 text-gray-600 sm:mt-3 sm:text-lg md:mt-5 md:text-xl truncate-3-lines md:truncate-2-lines">
          {subtitle}
        </h4>
        <div className="flex flex-col mt-1 sm:mt-0 sm:flex-row sm:flex-wrap">
          <div className="flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mr-6">
            <svg
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {new Date(date).toDateString()}
          </div>
          <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
            <svg
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clipRule="evenodd"
              />
            </svg>
            {pricing === "free" && "Free"}
            {pricing === "subscription" && "Subscription"}
          </div>
        </div>
      </div>
      <div className="flex mt-5 md:mt-0 md:ml-4">
        <Link
          href={`${
            namespaceId !== "" ? "/" : ""
          }${namespaceId}/dashboard/editor/${slug}`}
        >
          <a className="rounded-md shadow-sm group">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white border border-gray-300 rounded-md group-hover:text-pink-500 focus:outline-none focus:shadow-outline-pink focus:border-pink-300 active:text-gray-800 active:bg-gray-50">
              <svg
                className="w-5 h-5 mr-2 -ml-1 group-hover:text-pink-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit
            </div>
          </a>
        </Link>
        <a
          href={`https://${
            namespaceId !== "demo" ? space?.namespaceId ?? "" : "demo"
          }${space?.namespaceId !== undefined ? "." : ""}sentrei.com${
            namespaceId === "demo" ? "/demo" : ""
          }/${slug}`}
          className="ml-3 rounded-md shadow-sm group"
          target="_blank"
          rel="noreferrer"
        >
          <div className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white border border-gray-300 rounded-md group-hover:text-pink-500 focus:outline-none focus:shadow-outline-pink focus:border-pink-300 active:text-gray-800 active:bg-gray-50">
            <svg
              className="w-5 h-5 mr-2 -ml-1 group-hover:text-pink-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
            View
          </div>
        </a>
        <span className="ml-3 rounded-md shadow-sm">
          <button
            type="button"
            className={clsx(
              "inline-flex items-center px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-outborder border-transparent rounded-md focus:outline-none focus:shadow-outline-pink",
              status === "published" &&
                "focus:border-pink-700 active:bg-pink-700 text-white bg-pink-600 hover:bg-pink-500",
              status === "preview" &&
                "focus:border-pink-300 active:bg-pink-300 text-pink-500 bg-white hover:bg-pink-200 border-pink-400 border",
            )}
          >
            {status === "preview" && (
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {status === "published" && (
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {status === "preview" && "Preview"}
            {status === "published" && "Published"}
          </button>
        </span>
      </div>
    </div>
  );
}
