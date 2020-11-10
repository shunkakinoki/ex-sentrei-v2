import Link from "next/link";

import LandingHeroTyped from "@/components/LandingHeroTyped";

export default function LandingHero(): JSX.Element {
  return (
    <section className="relative pt-3 pb-3 md:pb-6">
      <div className="px-4 mx-auto mt-10 sm:px-6">
        <div className="sm:text-left md:text-center">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            The most{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              delightful
            </span>
            <br className="hidden sm:block" /> writing platform for <br />
            <LandingHeroTyped
              text={["blogging.", "journalism.", "newsletters."]}
            />
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-4 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl md:max-w-3xl lg:max-w-4xl">
            We charge{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              zero commissions{" "}
            </span>
            for all paid articles and subscriptions, so you get all the revenue.
            <br className="hidden lg:block" /> We never show annoying ads,
            badges, and popups so readers enjoy the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              best experience
            </span>
            .
            <br className="hidden lg:block" /> We aim to do much better, how the
            internet deserves in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              2020
            </span>
            .
          </p>
          <div className="mt-5 sm:mt-6 sm:flex sm:justify-center">
            <div className="rounded-md group">
              <Link href="/signup">
                <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-pink-500 border border-transparent rounded-md shadow-md md:shadow-lg group-hover:bg-pink-400 focus:outline-none focus:border-pink-300 focus:shadow-outline-pink md:py-4 md:text-lg md:px-10 group-hover:shadow-xl">
                  Start free
                  <svg
                    className="w-5 h-5 ml-1 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </Link>
            </div>
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 group">
              <Link href="/demo">
                <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-pink-800 transition duration-150 ease-in-out bg-pink-100 border border-transparent rounded-md shadow-md md:shadow-lg group-hover:text-pink-500 group-hover:bg-pink-200 focus:outline-none focus:shadow-outline-pink focus:border-pink-300 md:py-4 md:text-lg md:px-10 group-hover:shadow-xl">
                  Live demo
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center mx-auto mt-8 mb-3 space-x-0 space-y-2 text-xs text-gray-600 sm:mt-6 md:mt-4 sm:flex-row sm:space-x-8 sm:space-y-0">
            <div className="flex items-center ">
              <svg
                viewBox="0 0 20 20"
                fill="currentcolor"
                className="w-4 h-4 mr-1 text-green-400"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414.0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414.0z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-base font-normal leading-7 text-gray-500 lg:mx-auto">
                Forever free to start
              </p>
            </div>
            <div className="flex items-center">
              <svg
                viewBox="0 0 20 20"
                fill="currentcolor"
                className="w-4 h-4 mr-1 text-green-400"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414.0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414.0z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-base font-normal leading-7 text-gray-500 lg:mx-auto">
                Write in markdown
              </p>
            </div>
            <div className="flex items-center">
              <svg
                viewBox="0 0 20 20"
                fill="currentcolor"
                className="w-4 h-4 mr-1 text-green-400"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414.0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414.0z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-base font-normal leading-7 text-gray-500 lg:mx-auto">
                Zero commissions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
