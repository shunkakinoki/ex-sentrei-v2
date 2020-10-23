import Link from "next/link";
import LandingHeroTyped from "@/components/LandingHeroTyped";

export default function LandingHero(): JSX.Element {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-screen-xl mx-2">
        <div className="relative z-10 pb-6 sm:pb-8 md:pb-12 xl:max-w-2xl xl:w-full xl:pb-36">
          <main className="mt-10 sm:mt-12 sm:pr-6 md:mt-16 lg:mt-20 xl:mt-28 xl:ml-4">
            <div className="sm:text-center xl:text-left">
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                The most{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
                  delightful
                </span>{" "}
                way to start your own{" "}
                <LandingHeroTyped text={["blog", "media", "newsletter"]} />.
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl xl:mx-0">
                Managing a CMS is a lot of work. <br />
                Medium&copy;&nbsp;&amp;&nbsp;Substack&copy; have their own
                shortcomings. <br />
                We aim to much better, how the world deserves in 2020.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center xl:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/signup">
                    <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-pink-500 border border-transparent rounded-md hover:bg-pink-400 focus:outline-none focus:border-pink-300 focus:shadow-outline-pink md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/demo">
                    <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-pink-800 transition duration-150 ease-in-out bg-pink-100 border border-transparent rounded-md hover:text-pink-500 hover:bg-pink-50 focus:outline-none focus:shadow-outline-pink focus:border-pink-300 md:py-4 md:text-lg md:px-10">
                      Live demo
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="pb-3 mx-2 mt-6 mb-5 shadow-lg md:mx-4 md:mb-6 lg:mx-6 xl:mx-8 md:mt-6 lg:mt-8 xl:object-cover xl:absolute xl:inset-y-0 xl:right-0 xl:w-2/5 2xl:w-1/2">
        <div className="flex px-5 pt-4 pb-4 bg-gray-300 rounded-t">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 ml-2 bg-yellow-300 rounded-full" />
          <span className="w-3 h-3 ml-2 bg-green-500 rounded-full" />
        </div>
        <div className="mb-6">
          <iframe
            className="z-0 w-full h-64 mb-4 overflow-hidden md:h-96 lg:h-128"
            src="/demo"
            title="Demo"
          />
        </div>
      </div>
    </div>
  );
}
