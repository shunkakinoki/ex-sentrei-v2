export default function LandingBanner(): JSX.Element {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                The most{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-600">
                  delightful
                </span>{" "}
                way to start your own newsletter.
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Managing a CMS is hard and tiring. <br />
                Substack&copy; charges too much for its offering. <br />
                We aim to much better, like the world deserves in 2020.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-pink-600 border border-transparent rounded-md hover:bg-pink-500 focus:outline-none focus:border-pink-400 focus:shadow-outline-pink md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-pink-700 transition duration-150 ease-in-out bg-pink-100 border border-transparent rounded-md hover:text-pink-600 hover:bg-pink-50 focus:outline-none focus:shadow-outline-pink focus:border-pink-300 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="p-3 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="w-full h-full p-3 lg:p-20"
          src="/images/newsletter.svg"
          alt="Newsletter"
        />
      </div>
    </div>
  );
}
