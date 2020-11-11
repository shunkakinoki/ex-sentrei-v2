import Image from "next/image";

import Profile from "@/types/Profile";

export interface Props extends Pick<Profile.Get, "image" | "name"> {
  namespaceId: string;
}

export default function ArticleAuthor({
  image,
  name,
  namespaceId,
}: Props): JSX.Element {
  return (
    <a className="inline object-cover w-12 h-12 mr-2 rounded-full">
      <Image
        unoptimized={namespaceId === "demo"}
        height={50}
        width={50}
        layout="fixed"
        src={image ?? "/assets/logo.png"}
        alt={`Author ${name}`}
      />
    </a>
  );
}
