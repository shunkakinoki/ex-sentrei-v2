export default function LandingMission(): JSX.Element {
  return (
    <div className="py-16 bg-gray-300">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base font-semibold leading-6 tracking-wide text-pink-600 uppercase">
            Our mission
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            The publishing tool that the internet truly deserves.
          </h3>
          <p className="max-w-3xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            We just want to be fair to both readers and writers. We feel that
            popular publishing tools are somewhat evil and being dishonest. We
            just want to do better. Built alone in Tokyo.
          </p>
        </div>
      </div>
      <div className="container max-w-screen-lg px-5 pt-12 mx-auto">
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/3 md:mb-0">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-pink-500 bg-pink-100 rounded-full">
              <svg
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-xl font-extrabold text-gray-800">
                Beautiful Theming
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                Brand your publication in no-code.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/3 md:mb-0">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-pink-500 bg-pink-100 rounded-full">
              <svg
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-xl font-extrabold text-gray-800">
                No crap
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                No popups, no ads, no anything.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/3 md:mb-0">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-pink-500 bg-pink-100 rounded-full">
              <svg
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-xl font-extrabold text-gray-800">
                Zero commissions
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                No platform commissions on paywalls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
