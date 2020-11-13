import clsx from "clsx";
import Image from "next/image";

import useStory from "@/hooks/useStory";
import Article from "@/types/Article";

export interface Props extends Pick<Article.Get, "id" | "image" | "title"> {
  namespaceId: string;
  noSwitch: boolean;
}

export default function SpaceStoryImage({
  id,
  image,
  title,
  namespaceId,
  noSwitch,
}: Props): JSX.Element {
  const {storySwitch} = useStory();

  return (
    <div
      className={clsx(
        "transition duration-300 ease-in-out transform shadow-none md:hover:-translate-y-1 md:shadow-lg xl:shadow-xl group-hover:shadow-none md:group-hover:shadow-2xl",
        {
          "md:w-full": (!noSwitch && storySwitch) || noSwitch,
          "md:w-1/2 flex-none": !noSwitch && !storySwitch,
        },
      )}
    >
      <div className="relative">
        <div className="w-full h-40 bg-gray-400 sm:h-64">
          <Image
            layout="fill"
            className="object-cover"
            alt={`Story Cover for ${title}`}
            src={image ?? `https://picsum.photos/900/1200?nocache=${id}`}
            unoptimized={!image || namespaceId === "demo"}
          />
        </div>
      </div>
    </div>
  );
}
