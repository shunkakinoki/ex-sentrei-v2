import {Transition} from "@headlessui/react";
import Link from "next/link";

export interface Props {
  open: boolean;
}

export default function HeaderDemoMenu({open}: Props): JSX.Element {
  return (
    <Transition
      show={open}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      {ref => (
        <div
          ref={ref}
          className="absolute w-screen max-w-md px-2 mt-6 -ml-4 transform md:left-1/3 md:mt-8 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        >
          <div className="rounded-lg shadow-lg">
            <div className="overflow-hidden rounded-lg shadow-xs">
              <div className="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                <Link href="/demo/dashboard">
                  <a className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Built-in newsletter
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Send email newsletters to engage with your customers
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href="/demo/editor">
                  <a className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Custom editor
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Write your content in markdown with our dedicated
                        markdown editor
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href="/demo">
                  <a className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Custom domains
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Brand your content on top of the blazing edge performant
                        web network.
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href="/demo/dashboard">
                  <a className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Custom integrations
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Integrate with 3rd party services to further delight
                        your audience.
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href="/demo/dashboard">
                  <a className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-pink-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Dedicated analytics
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Get a better understanding of your audience.
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href="/demo/dashboard/sales">
                  <a className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-6 text-gray-900">
                        Premium content
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        Charge your customers for your own content with no
                        commissions at all
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                <div className="flow-root">
                  <Link href="/demo">
                    <a className="flex items-center p-3 -m-3 space-x-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>See Demo</span>
                    </a>
                  </Link>
                </div>
                <div className="flow-root">
                  <Link href="/sales">
                    <a className="flex items-center p-3 -m-3 space-x-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>Contact Sales</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
