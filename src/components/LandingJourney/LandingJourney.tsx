import dynamic from "next/dynamic";

const EditorRich = dynamic(() => import("@/components/EditorRich"), {
  ssr: false,
});

export default function LandingJourney(): JSX.Element {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base font-semibold leading-6 tracking-wide text-pink-600 uppercase ">
            Start your Sentrei journey
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            The most friendly way of monetizing your content
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            Seamless flow from writing to publishing. No more need for advanced
            integrations. You have all the control.
          </p>
        </div>
      </div>
      <div className="px-4 mx-auto">
        <div className="grid items-center grid-cols-1 mt-10 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <p className="text-base font-semibold leading-6 tracking-wide text-pink-600 uppercase">
              STEP 1
            </p>
            <h2 className="mt-3 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-center text-black sm:text-left md:text-4xl">
              Write in markdown
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              We believe that markdown is here to stay.
            </p>
          </div>
          <div className="p-4 overflow-hidden transition duration-300 ease-in-out transform border border-gray-300 rounded-lg shadow-2xl hover:-translate-y-3">
            <div className="h-32 p-4 overflow-auto overscroll-none">
              <EditorRich body="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
