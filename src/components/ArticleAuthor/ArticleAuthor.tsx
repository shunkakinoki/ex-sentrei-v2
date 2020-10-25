import Image from "next/image";
import Link from "next/link";

import Author from "@/types/Author";

export interface Props {
  author: Author;
  isDemo?: boolean;
}

export default function ArticleAuthor({
  author,
  isDemo = false,
}: Props): JSX.Element {
  return (
    <Link href={`${isDemo ? "/demo" : ""}/profile/${author.namespace}`}>
      <a>
        <Image
          className="inline object-cover w-12 h-12 mr-2 rounded-full"
          unoptimized
          unsized
          src={author.image ?? ""}
          alt={`Author ${author.name}`}
        />
      </a>
    </Link>
  );
}
