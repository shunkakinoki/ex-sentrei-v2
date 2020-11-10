import dynamic from "next/dynamic";

const EditorRich = dynamic(() => import("@/components/EditorRich"), {
  ssr: false,
});

export default function LandingJourney(): JSX.Element {
  return (
    <section className="w-full max-w-screen-xl py-12 mx-auto">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base font-semibold leading-6 tracking-wide text-pink-600 uppercase ">
            Start your Sentrei journey
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            The most friendly platform for all writers.
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            Seamless flow from writing to publishing. No platform commissions on
            paywalls. No ads or popups for readers. No comprimises.
          </p>
        </div>
      </div>
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 mt-10 mb-16 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 text-white bg-pink-500 rounded-md">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold leading-6 tracking-wide text-pink-600 uppercase">
                  STEP 1
                </h3>
              </div>
            </div>
            <h2 className="mt-3 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-center text-black sm:text-left md:text-4xl">
              Write in markdown
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Write seamlessly with markdown, with custom formats supported.
              Import and publish it instantly on your own site. We plan to
              support integrations so that you can write anywhere of your
              liking.
            </p>
          </div>
          <div className="p-4 overflow-hidden transition duration-300 ease-in-out transform border border-gray-300 rounded-lg shadow-2xl hover:-translate-y-3">
            <div className="h-32 p-4 overflow-auto overscroll-none">
              <EditorRich body="" />
            </div>
          </div>
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 mt-10 mb-16 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 text-white bg-pink-500 rounded-md">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold leading-6 tracking-wide text-pink-600 uppercase">
                  STEP 2
                </h3>
              </div>
            </div>
            <h2 className="mt-3 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-center text-black sm:text-left md:text-4xl">
              Engage with your audience
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Deliver newsletters to your audience for free. Understand your
              audience through dedicated analytics. We are here to help you
              grow. We plan to introduce features to help assist you on the
              journey.
            </p>
          </div>
          <div className="p-4 overflow-hidden transition duration-300 ease-in-out transform border border-gray-300 rounded-lg shadow-2xl hover:-translate-y-3">
            <div className="h-32 p-4 overflow-auto overscroll-none" />
          </div>
        </div>
        <div className="grid items-center grid-cols-1 mt-10 mb-16 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 text-white bg-pink-500 rounded-md">
                  <svg
                    className="w-6 h-6"
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
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold leading-6 tracking-wide text-pink-600 uppercase">
                  STEP 3
                </h3>
              </div>
            </div>
            <h2 className="mt-3 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-center text-black sm:text-left md:text-4xl">
              Get paid on subscriptions
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              You get all of the revenue. Unlike traditional services, we do not
              charge any platform commissions on purchases. (excluding standard
              Stripe fees) We believe writers deserve more.
            </p>
          </div>
          <div className="p-4 overflow-hidden transition duration-300 ease-in-out transform border border-gray-300 rounded-lg shadow-2xl hover:-translate-y-3">
            <div className="h-32 p-4 overflow-auto overscroll-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
