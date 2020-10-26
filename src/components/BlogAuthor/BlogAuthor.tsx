import Image from "next/image";
import Link from "next/link";

import Author from "@/types/Author";

export interface Props extends Author {
  isDemo?: boolean;
}

export default function BlogAuthor({
  isDemo = false,
  bio,
  image,
  name,
  namespace,
}: Props): JSX.Element {
  return (
    <>
      <div className="flex-shrink-0 px-4 py-2 m-2 text-center ">
        <Link href={`${isDemo ? "/demo" : ""}/profile/${namespace}`}>
          <a>
            <Image
              unoptimized
              unsized
              className="inline object-cover w-12 h-12 p-1 mr-2 border rounded-full"
              src={image ?? ""}
              alt={`Author ${name}`}
            />
          </a>
        </Link>
      </div>
      <div className="flex-initial w-full px-4 py-2 m-2 text-center text-gray-600 md:w-4/5 lg:w-2/3 xl:w-1/3">
        <h4 className="text-lg text-center md:text-left truncate-3-lines">
          {bio}
        </h4>
      </div>
    </>
  );
}
