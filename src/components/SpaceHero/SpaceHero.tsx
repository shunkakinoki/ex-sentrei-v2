/* eslint-disable react/button-has-type */

import dynamic from "next/dynamic";
import Link from "next/link";

import SpaceAuthor from "@/components/SpaceAuthor";
import Space from "@/types/Space";

export interface Props
  extends Pick<Space.Get, "description" | "title" | "updatedBy"> {
  namespaceId: string;
}

const SpaceHeroStorySwitch = dynamic(
  () => import("@/components/SpaceHeroStorySwitch"),
  {
    ssr: false,
  },
);

export default function SpaceHero({
  description,
  namespaceId,
  title,
  updatedBy,
}: Props): JSX.Element {
  return (
    <section>
      <div className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12 lg:mt-24 lg:mb-20">
        <div className="md:w-1/2 lg:w-2/3">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-center text-gray-900 md:text-left sm:text-5xl sm:leading-none md:text-6xl">
            {title}
          </h1>
          <h4 className="mt-5 text-lg text-center lg:mt-8 md:text-left ">
            {description}
          </h4>
        </div>
        <div className="mt-10 sm:mt-15 sm:flex sm:justify-center md:w-1/2 lg:w-1/3 lg:flex-shrink-0 lg:mt-0">
          <div className="rounded-md shadow">
            <Link href={`/${namespaceId}/subscribe`}>
              <a className="flex items-center justify-center w-full px-8 py-3 font-medium text-white rounded-md hover:from-purple-300 hover:via-pink-400 hover:to-red-400 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 md:py-4 md:text-lg md:px-20">
                Subscribe now.
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full mt-3 align-middle sm:mt-6">
        <SpaceAuthor
          name={updatedBy.name}
          bio={updatedBy.bio}
          image={updatedBy.image}
        />
        <SpaceHeroStorySwitch />
      </div>
    </section>
  );
}
