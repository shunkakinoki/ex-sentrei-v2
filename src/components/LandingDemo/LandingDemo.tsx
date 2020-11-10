import clsx from "clsx";
import {useState} from "react";

export default function LandingDemo(): JSX.Element {
  const [tabType, setTabType] = useState<"website" | "dashboard">("website");

  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-gray-200 pointer-events-none top-1/2 md:mt-24 "
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 right-0 w-px p-px m-auto transform translate-y-1/2" />
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="container max-w-screen-xl px-3 py-3 mx-auto">
          <p className="mb-3 text-sm font-medium text-center text-gray-400 ">
            <svg
              className="inline-block w-3 h-3 mr-1 text-gray-400 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Actual working demo of a publication
            <svg
              className="inline-block w-3 h-3 ml-1 text-gray-400 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </p>
          <div className="container justify-center flex-grow max-w-screen-xl mx-auto transition duration-300 ease-in-out transform rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-3">
            <div className="flex items-end pt-2 pl-3 pr-5 bg-gray-300 rounded-t">
              <div className="flex items-center self-center mr-3">
                <span className="w-3 h-3 mx-1 bg-red-600 rounded-full focus:outline-none" />
                <span className="w-3 h-3 mx-1 bg-yellow-600 rounded-full focus:outline-none" />
                <span className="w-3 h-3 mx-1 bg-green-600 rounded-full focus:outline-none" />
              </div>
              <button
                className={clsx(
                  "flex items-end justify-between w-24 py-1 text-sm rounded-t-lg sm:w-48 sm:py-2",
                  tabType === "website" && "bg-gray-100",
                  tabType !== "website" && "bg-gray-400 opacity-75",
                )}
                type="button"
                onClick={() => setTabType("website")}
              >
                <div className="px-2 overflow-x-hidden text-xs text-left text-gray-700 truncate whitespace-no-wrap sm:px-4 sm:text-md">
                  Demo Website
                </div>
                <div className="self-center flex-shrink-0 w-2 h-2 mx-1 sm:w-3 sm:h-3 sm:mx-3 focus:outline-none">
                  <svg
                    className="w-full h-full text-gray-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
                  </svg>
                </div>
              </button>
              <button
                type="button"
                className={clsx(
                  "flex items-end justify-between w-24 py-1 text-sm rounded-t-lg sm:w-48 sm:py-2",
                  tabType === "dashboard" && "bg-gray-100",
                  tabType !== "dashboard" && "bg-gray-400 opacity-75",
                )}
                onClick={() => setTabType("dashboard")}
              >
                <div className="px-2 overflow-x-hidden text-xs text-left text-gray-700 truncate whitespace-no-wrap sm:px-4 sm:text-md">
                  Demo Dashboard
                </div>
                <div className="self-center flex-shrink-0 w-2 h-2 mx-1 sm:w-3 sm:h-3 sm:mx-3 focus:outline-none">
                  <svg
                    className="w-full h-full text-gray-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between bg-gray-100">
              <div className="flex flex-grow mx-2 my-1">
                <div className="flex items-center mx-2 my-1">
                  <svg
                    className="w-4 h-4 mr-4 text-gray-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                  </svg>
                </div>
                <div className="flex w-3/4 mx-2 my-1">
                  <div className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <span className="p-1 focus:outline-none focus:shadow-outline">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="w-full py-1 text-sm font-light leading-3 text-gray-600 bg-gray-300 rounded-full shadow pl-9"
                    value={
                      tabType === "website"
                        ? "https://demo.sentrei.com"
                        : "https://demo.sentrei.com/demo/dashboard"
                    }
                  />
                </div>
              </div>
            </div>
            <iframe
              className={clsx(
                "w-full h-64 overflow-hidden bg-white md:h-96 lg:h-128",
                tabType !== "website" && "hidden",
              )}
              src="/demo"
              title="Demo website"
            />
            <iframe
              className={clsx(
                "w-full h-64 overflow-hidden bg-white md:h-96 lg:h-128",
                tabType !== "dashboard" && "hidden",
              )}
              src="/demo/dashboard"
              title="Demo dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
