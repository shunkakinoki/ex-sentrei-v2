/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Image from "next/image";

import Customer from "@/types/Customer";

export interface Props
  extends Pick<
    Customer.Get,
    "createdAt" | "email" | "image" | "name" | "status"
  > {
  namespaceId: string;
}

export default function DashboardCustomersTableItem({
  createdAt,
  email,
  image,
  name,
  status,
  namespaceId,
}: Props): JSX.Element {
  return (
    <tr key={email}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            {image ? (
              <Image
                className="w-10 h-10 rounded-full"
                loading="lazy"
                height={40}
                width={40}
                layout="fixed"
                src={image}
                alt={`Customer ${name || ""}`}
                unoptimized={namespaceId === "demo"}
              />
            ) : (
              <span className="inline-block w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                <svg
                  className="w-full h-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            )}
          </div>
          <div className="ml-4 truncate">
            <div className="text-sm font-medium leading-3 text-gray-900 md:leading-5">
              {name}
            </div>
            <div className="text-sm leading-3 text-gray-500 md:leading-5">
              {email}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="inline-flex px-2 text-xs font-semibold leading-3 text-green-800 bg-green-100 rounded-full md:leading-5">
          {status}
        </span>
      </td>
      <td className="px-6 py-4 text-sm leading-3 text-gray-500 whitespace-nowrap md:leading-5">
        {new Date(createdAt).toDateString()}
      </td>
    </tr>
  );
}
