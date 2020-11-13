export default function DashboardStats(): JSX.Element {
  return (
    <div className="card">
      <div className="px-4 py-3 border-0 card-header">
        <h3 className="text-xl font-medium text-gray-800">Article Stats</h3>
      </div>
      <div className="px-4 mb-1 -mt-2 divide-y divide-gray-200 card-body">
        <div className="flex items-center justify-between py-3 text-sm">
          <div className="flex items-center space-x-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-none w-5 h-5 text-pink-600"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-3">Unique Views</span>
          </div>
          <span className="font-mono text-gray-900">333,333 views</span>
        </div>
        <div className="flex items-center justify-between py-3 text-sm">
          <div className="flex items-center space-x-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-none w-5 h-5 text-pink-600"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-3">Average Duration</span>
          </div>
          <span className="font-mono text-gray-900">36 sec.</span>
        </div>
        <div className="flex items-center justify-between py-3 text-sm">
          <div className="flex items-center space-x-2 text-gray-700">
            <svg
              className="flex-none w-5 h-5 text-pink-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="ml-3">Likes</span>
          </div>
          <span className="font-mono text-gray-900">120</span>
        </div>
        <div className="flex items-center justify-between py-3 text-sm">
          <div className="flex items-center space-x-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-none w-5 h-5 text-pink-600"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-3">Newsletter sent</span>
          </div>
          <span className="font-mono text-green-800 bg-green-200 badge">
            322
          </span>
        </div>
        <div className="flex items-center justify-between py-3 text-sm">
          <div className="flex items-center space-x-2 text-gray-700">
            <svg
              className="flex-none w-5 h-5 text-pink-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
            <span className="ml-3">Mail opened</span>
          </div>
          <span className="font-mono text-red-700 bg-red-200 badge">30</span>
        </div>
      </div>
    </div>
  );
}
