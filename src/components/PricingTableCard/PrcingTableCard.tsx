/* eslint-disable react/require-default-props */

import clsx from "clsx";
import Link from "next/link";

import Plan from "@/types/Plan";

export interface Props {
  plan: Plan;
}

export function CheckIconItem({
  children,
  highlight = false,
}: {
  children: string;
  highlight?: boolean;
}): JSX.Element {
  return (
    <li className="flex items-start mt-4">
      <div className="flex-shrink-0">
        <svg
          className="w-6 h-6 text-pink-500"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <p
        className={clsx(
          "ml-3 text-base font-medium leading-6",
          highlight &&
            "text-transparent text-lg font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ",
          !highlight && " text-gray-500",
        )}
      >
        {children}
      </p>
    </li>
  );
}

export default function PricingTableCard({plan}: Props): JSX.Element {
  return (
    <div
      className={clsx(
        "max-w-lg mx-auto lg:max-w-none lg:mx-0",
        plan === "free" &&
          "lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-4",
        plan === "pro" &&
          "lg:col-start-4 lg:col-end-7 lg:row-start-2 lg:row-end-4",
        plan === "premium" &&
          "lg:col-start-7 lg:col-end-11 lg:row-start-1 lg:row-end-5",
      )}
    >
      <div className="relative z-10 rounded-lg shadow-xl">
        <div>
          <div
            className={clsx(
              "absolute inset-0 rounded-lg pointer-events-none",
              plan === "free" && " border border-gray-300",
              plan === "pro" && "border border-pink-300",
              plan === "premium" && "border-2 border-pink-400",
            )}
          />
          {plan === "premium" && (
            <div className="absolute inset-x-0 top-0 transform translate-y-px">
              <div className="flex justify-center transform -translate-y-1/2">
                <span className="inline-flex px-4 py-1 text-sm font-semibold leading-5 tracking-wider text-white uppercase bg-pink-400 rounded-full">
                  Early Access
                </span>
              </div>
            </div>
          )}
          <div className="px-6 pt-12 pb-10 bg-white rounded-t-lg">
            <div>
              <h2 className="mt-2 text-3xl font-semibold leading-9 text-center text-gray-900 font-display sm:-mx-6">
                {plan === "free" && "Free"}
                {plan === "pro" && "Pro"}
                {plan === "premium" && "Premium"}
              </h2>
              <div className="flex items-center justify-center mt-4 font-display">
                <span className="flex items-start px-3 text-6xl font-medium leading-none tracking-tight text-gray-900 sm:text-7xl">
                  <span className="mt-2 mr-1 text-3xl leading-none sm:text-4xl">
                    $
                  </span>
                  <span>
                    {plan === "free" && "0"}
                    {plan === "pro" && "9"}
                    {plan === "premium" && "25"}
                  </span>
                </span>
                <span className="text-xl font-semibold leading-8 tracking-wide text-gray-400 sm:text-3xl sm:leading-9">
                  /mo
                </span>
              </div>
            </div>
          </div>
          <div className="px-6 pt-10 pb-8 border-t-2 border-gray-200 rounded-b-lg bg-gray-50 sm:px-10 sm:py-10">
            <ul>
              <CheckIconItem>Built-in newsletter</CheckIconItem>
              <CheckIconItem>Custom analytics</CheckIconItem>
              <CheckIconItem>Custom editor</CheckIconItem>
              {(plan === "pro" || plan === "premium") && (
                <CheckIconItem highlight>Cusom domains</CheckIconItem>
              )}
              {(plan === "pro" || plan === "premium") && (
                <CheckIconItem highlight>Dedicated support</CheckIconItem>
              )}
              {plan === "premium" && (
                <CheckIconItem highlight>
                  Premium subscription w/ Stripe (Zero commissions excluding
                  Stripe fee)
                </CheckIconItem>
              )}
            </ul>
            <div className="mt-8 md:mt-10 lg:mt-12">
              <div className="rounded-lg shadow-md">
                <Link href={plan === "free" ? "/signup" : "/demo/dashboard"}>
                  <a className="block w-full px-6 py-4 text-xl font-semibold leading-6 text-center text-white transition duration-150 ease-in-out rounded-lg font-display hover:from-purple-300 hover:via-pink-400 hover:to-red-400 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 focus:outline-none focus:shadow-outline">
                    {plan === "free" && "Start free now"}
                    {plan === "pro" && "Buy Pro Plan"}
                    {plan === "premium" && "Buy Premium Plan"}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
