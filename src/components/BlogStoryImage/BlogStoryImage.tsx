import Image from "next/image";

import Article from "@/types/Article";

export type Props = Pick<Article.Fields, "image" | "title">;

export default function BlogStoryImage({image, title}: Props): JSX.Element {
  return (
    <div className="transition duration-300 ease-in-out transform shadow-none md:hover:-translate-y-1 md:shadow-lg xl:shadow-xl group-hover:shadow-none md:group-hover:shadow-2xl">
      <div className="relative">
        <div className="w-full h-40 bg-gray-400 sm:h-64">
          <Image
            layout="fill"
            className="object-cover"
            alt={`Story Cover for ${title}`}
            src={image as string}
          />
        </div>
      </div>
    </div>
  );
}
