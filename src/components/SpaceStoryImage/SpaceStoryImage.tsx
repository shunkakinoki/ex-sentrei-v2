import clsx from "clsx";
import Image from "next/image";

import useStory from "@/hooks/useStory";
import Article from "@/types/Article";

export type Props = Pick<Article.Fields, "image" | "title">;

export default function SpaceStoryImage({image, title}: Props): JSX.Element {
  const {storySwitch} = useStory();

  return (
    <div
      className={clsx(
        "w-full transition duration-300 ease-in-out transform shadow-none md:hover:-translate-y-1 md:shadow-lg xl:shadow-xl group-hover:shadow-none md:group-hover:shadow-2xl",
        {
          "w-full": storySwitch,
          "md:w-1/2 flex-none": !storySwitch,
        },
      )}
    >
      <div className="relative">
        <div className="w-full h-40 bg-gray-400 sm:h-64">
          <Image
            layout="fill"
            className="object-cover"
            alt={`Story Cover for ${title}`}
            src={image ?? "/assets/logo.png"}
          />
        </div>
      </div>
    </div>
  );
}
