export default function LandingDemo(): JSX.Element {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-gray-200 pointer-events-none top-1/2 md:mt-24 "
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 right-0 w-px p-px m-auto transform translate-y-1/2" />
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="container max-w-screen-xl px-3 py-3 mx-auto">
          <p className="mb-3 text-sm font-medium text-center text-gray-400 ">
            <svg
              className="inline-block w-3 h-3 mr-1 text-gray-400 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Actual working demo of a publication
            <svg
              className="inline-block w-3 h-3 ml-1 text-gray-400 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </p>
          <div className="container justify-center flex-grow max-w-screen-xl mx-auto transition duration-300 ease-in-out transform rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-3">
            <div className="flex px-5 pt-4 pb-4 bg-gray-300 rounded-t">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 ml-2 bg-yellow-300 rounded-full" />
              <span className="w-3 h-3 ml-2 bg-green-500 rounded-full" />
            </div>
            <iframe
              className="w-full h-64 overflow-hidden bg-white md:h-96 lg:h-128"
              src="/demo"
              title="Demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
