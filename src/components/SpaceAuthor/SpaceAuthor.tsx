import Image from "next/image";

import Profile from "@/types/Profile";

export type Props = Pick<Profile.Get, "bio" | "image" | "name">;

export default function SpaceAuthor({bio, image, name}: Props): JSX.Element {
  return (
    <>
      <div className="flex-shrink-0 px-4 py-2 m-2 text-center ">
        <a>
          <Image
            height={50}
            width={50}
            layout="fixed"
            className="inline object-cover w-12 h-12 p-1 mr-2 border rounded-full"
            src={image ?? "/assets/logo.png"}
            alt={`Author ${name}`}
          />
        </a>
      </div>
      <div className="flex-initial w-full px-4 py-2 m-2 text-center text-gray-600 md:w-4/5 lg:w-2/3 xl:w-1/3">
        <h4 className="text-lg text-center md:text-left truncate-3-lines">
          {bio}
        </h4>
      </div>
    </>
  );
}
