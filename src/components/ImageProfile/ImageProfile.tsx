import Image from "next/image";

import Profile from "@/types/Profile";

export interface Props extends Pick<Profile.Get, "image" | "name"> {
  size?: number;
}

export default function ImageProfile({
  image,
  name,
  size = 40,
}: Props): JSX.Element {
  return (
    <>
      {image ? (
        <Image
          priority
          height={size}
          width={size}
          layout="fixed"
          className="inline object-cover w-12 h-12 p-1 mr-2 border rounded-full"
          src={image ?? "/assets/logo.png"}
          alt={`Author ${name}`}
        />
      ) : (
        <span className="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
          <svg
            className="w-full h-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
      )}
    </>
  );
}
