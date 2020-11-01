import Image from "next/image";

import Article from "@/types/Article";

export type Props = Pick<Article.Get, "image" | "title">;

export default function ArticleImage({image, title}: Props): JSX.Element {
  return (
    <div className="shadow-md md:shadow-lg xl:shadow-xl">
      <Image
        unoptimized
        unsized
        alt={`Story Cover for ${title}`}
        src={image as string}
        className="object-cover w-full h-64 bg-gray-300 md:h-96 lg:h-128 xl:h-192"
      />
    </div>
  );
}
