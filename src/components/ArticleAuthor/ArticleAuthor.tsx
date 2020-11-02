import Image from "next/image";

import Profile from "@/types/Profile";

export type Props = Pick<Profile.Get, "image" | "name">;

export default function ArticleAuthor({image, name}: Props): JSX.Element {
  return (
    <a className="inline object-cover w-12 h-12 mr-2 rounded-full">
      <Image
        height={50}
        width={50}
        layout="fixed"
        src={image ?? ""}
        alt={`Author ${name}`}
      />
    </a>
  );
}
