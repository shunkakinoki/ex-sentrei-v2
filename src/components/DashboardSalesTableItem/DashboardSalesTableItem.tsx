export default function DashboardSalesTableItem(): JSX.Element {
  return (
    <tr className="bg-white">
      <td className="w-full px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap max-w-0">
        <div className="flex">
          <a
            href="#"
            className="inline-flex space-x-2 text-sm leading-5 truncate group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500"
              x-description="Heroicon name: cash"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-500 truncate transition duration-150 ease-in-out group-hover:text-gray-900">
              Payment from Molly Sanders
            </p>
          </a>
        </div>
      </td>
      <td className="px-6 py-4 text-sm leading-5 text-right text-gray-500 whitespace-nowrap">
        <span className="font-medium text-gray-900">$20,000 </span>
        USD
      </td>
      <td className="hidden px-6 py-4 text-sm leading-5 text-gray-500 whitespace-nowrap md:block">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800 capitalize">
          success
        </span>
      </td>
      <td className="px-6 py-4 text-sm leading-5 text-right text-gray-500 whitespace-nowrap">
        July 11, 2020
      </td>
    </tr>
  );
}
