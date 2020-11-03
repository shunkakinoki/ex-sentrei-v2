import Link from "next/link";

import LandingHeroTyped from "@/components/LandingHeroTyped";

export default function LandingHero(): JSX.Element {
  return (
    <div className="relative pt-3 pb-3">
      <div className="px-4 mx-auto mt-10 sm:px-6">
        <div className="sm:text-left md:text-center">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            The most{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              friendly
            </span>
            <br className="hidden sm:block" /> writing platform for{" "}
            <br className="hidden sm:block" />
            <LandingHeroTyped
              text={["blogging.", "journalism.", "newsletters."]}
            />
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl md:max-w-3xl lg:max-w-4xl">
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
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Link href="/signup">
                <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-pink-500 border border-transparent rounded-md hover:bg-pink-400 focus:outline-none focus:border-pink-300 focus:shadow-outline-pink md:py-4 md:text-lg md:px-10">
                  Start free
                </a>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="/demo">
                <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-pink-800 transition duration-150 ease-in-out bg-pink-100 border border-transparent rounded-md hover:text-pink-500 hover:bg-pink-200 focus:outline-none focus:shadow-outline-pink focus:border-pink-300 md:py-4 md:text-lg md:px-10">
                  Live demo
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
