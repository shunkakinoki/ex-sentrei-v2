/* eslint-disable react/button-has-type */

import Link from "next/link";

import BlogAuthor, {Props as BlogAuthorProps} from "@/components/BlogAuthor";
import Blog from "@/types/Blog";

export interface Props extends Blog, Pick<BlogAuthorProps, "isDemo"> {
  namespace: string;
}

export default function BlogHero({
  isDemo = false,
  authors,
  namespace,
  title,
  subtitle,
}: Props): JSX.Element {
  return (
    <section>
      <div className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12 lg:mt-24 lg:mb-20">
        <div className="md:w-1/2 lg:w-2/3">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-center text-gray-900 md:text-left sm:text-5xl sm:leading-none md:text-6xl">
            {title}
          </h1>
          <h4 className="mt-5 text-lg text-center lg:mt-8 md:text-left ">
            {subtitle}
          </h4>
        </div>
        <div className="mt-10 sm:mt-15 sm:flex sm:justify-center md:w-1/2 lg:w-1/3 lg:flex-shrink-0 lg:mt-0">
          <div className="rounded-md shadow">
            <Link href={`/${namespace}/subscribe`}>
              <a className="flex items-center justify-center w-full px-8 py-3 font-medium text-white rounded-md hover:from-purple-300 hover:via-pink-400 hover:to-red-400 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 md:py-4 md:text-lg md:px-20">
                Subscribe now.
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full mt-3 align-middle sm:mt-6">
        <BlogAuthor
          isDemo={isDemo}
          name={authors[0].name}
          namespace={authors[0].namespace}
          bio={authors[0].bio}
          image={authors[0].image}
        />
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
    </section>
  );
}
