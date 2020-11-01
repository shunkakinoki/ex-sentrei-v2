import Image from "next/image";

import Profile from "@/types/Profile";

export type Props = Pick<Profile.Fields, "image" | "name">;

export default function ArticleAuthor({image, name}: Props): JSX.Element {
  return (
    <a>
      <Image
        className="inline object-cover w-12 h-12 mr-2 rounded-full"
        unoptimized
        unsized
        src={image ?? ""}
        alt={`Author ${name}`}
      />
    </a>
  );
}
