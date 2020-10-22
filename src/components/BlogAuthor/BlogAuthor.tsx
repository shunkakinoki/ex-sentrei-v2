/* eslint-disable react/button-has-type */

import Author from "@/types/Author";
import Image from "next/image";

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
      <div className="flex-initial px-4 py-2 m-2 text-center text-gray-600 md:w-4/5 lg:w-2/3 xl:w-1/3">
        <h4 className="text-lg text-center md:text-left truncate-3-lines">
          {bio}
        </h4>
      </div>
      <div className="flex-shrink-0 px-8 py-3 m-3 ml-auto">
        <button className="px-4 py-2 font-bold text-gray-800 bg-gray-300 border-r rounded-l hover:bg-gray-400">
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
