import Image from "next/image";

import Article from "@/types/Article";

export type Props = Pick<Article.Get, "image" | "title">;

export default function ArticleImage({image, title}: Props): JSX.Element {
  return (
    <div className="shadow-md md:shadow-lg xl:shadow-xl">
      <div className="relative">
        <div className="w-full h-64 bg-gray-300 md:h-96 lg:h-128 xl:h-192">
          <Image
            layout="fill"
            alt={`Story Cover for ${title}`}
            src={image as string}
          />
        </div>
      </div>
    </div>
  );
}
