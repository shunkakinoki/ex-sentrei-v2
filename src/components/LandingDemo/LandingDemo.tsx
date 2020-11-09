export default function LandingDemo(): JSX.Element {
  return (
    <div className="py-3">
      <p className="mx-auto mb-2 text-sm font-medium text-center text-gray-400">
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
      <div className="mx-2 mb-5 shadow-2xl">
        <div className="flex px-5 pt-4 pb-4 bg-gray-300 rounded-t">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 ml-2 bg-yellow-300 rounded-full" />
          <span className="w-3 h-3 ml-2 bg-green-500 rounded-full" />
        </div>
        <iframe
          className="w-full h-64 overflow-hidden md:h-96 lg:h-128"
          src="/demo"
          title="Demo"
        />
      </div>
    </div>
  );
}
