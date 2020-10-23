import {Transition} from "@headlessui/react";
import Link from "next/link";

export interface Props {
  open: boolean;
}

export default function HeaderMobileMenu({open}: Props): JSX.Element {
  return (
    <Transition
      show={open}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="absolute inset-x-0 top-0 pt-2 transition origin-top-right transform md:hidden">
        <div className="rounded-lg shadow-lg">
          <div className="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
            <div className="px-5 pt-5 pb-6 space-y-6">
              <div className="flex items-center justify-between">
                <div />
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav className="grid gap-y-8">
                  <Link href="/demo/dashboard">
                    <a className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
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
                      <div className="text-base font-medium leading-6 text-gray-900">
                        Built-in newsletter
                      </div>
                    </a>
                  </Link>
                  <Link href="/demo/dashboard">
                    <a className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
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
                      <div className="text-base font-medium leading-6 text-gray-900">
                        Custom editor
                      </div>
                    </a>
                  </Link>
                  <Link href="/demo">
                    <a className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
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
                      <div className="text-base font-medium leading-6 text-gray-900">
                        Custom domains
                      </div>
                    </a>
                  </Link>
                  <Link href="/demo/dashboard">
                    <a className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
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
                      <div className="text-base font-medium leading-6 text-gray-900">
                        Custom Integrations
                      </div>
                    </a>
                  </Link>
                  <Link href="/demo/dashboard">
                    <a className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
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
                      <div className="text-base font-medium leading-6 text-gray-900">
                        Dedicated analytics
                      </div>
                    </a>
                  </Link>
                  <Link href="/demo/dashboard/sales">
                    <a className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
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
                      <div className="text-base font-medium leading-6 text-gray-900">
                        Premium content
                      </div>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="space-y-6">
                <span className="flex w-full rounded-md shadow-sm">
                  <Link href="/signup">
                    <a className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-pink-400 border border-transparent rounded-md hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-700">
                      Sign up
                    </a>
                  </Link>
                </span>
                <p className="text-base font-medium leading-6 text-center text-gray-500">
                  Existing customer?{" "}
                  <Link href="/login">
                    <a className="text-pink-600 transition duration-150 ease-in-out hover:text-pink-500">
                      Log in
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
