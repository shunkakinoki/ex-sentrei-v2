/* eslint-disable react/button-has-type */

import Image from "next/image";

import Author from "@/types/Author";

export type Props = Author;

export default function BlogAuthor({bio, image, name}: Props): JSX.Element {
  return (
    <div className="flex justify-start w-full mt-3 align-middle sm:mt-6">
      <div className="flex-shrink-0 px-4 py-2 m-2 text-center ">
        <Image
          unoptimized
          unsized
          className="inline object-cover w-12 h-12 mr-2 rounded-full"
          src={image ?? ""}
          alt={`Author ${name}`}
        />
      </div>
      <div className="flex-initial w-full px-4 py-2 m-2 text-center text-gray-600 md:w-4/5 lg:w-2/3 xl:w-1/3">
        <h4 className="text-lg text-center md:text-left truncate-3-lines">
          {bio}
        </h4>
      </div>
      <div className="flex-shrink-0 hidden px-8 py-3 m-3 ml-auto md:block">
        <button className="px-4 py-2 font-bold text-gray-800 bg-gray-300 border-r rounded-l hover:bg-gray-400">
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
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
        </button>
        <button className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400">
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
              d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
