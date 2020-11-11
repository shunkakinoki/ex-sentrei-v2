import clsx from "clsx";
import Link from "next/link";

import SpaceStoryHero from "@/components/SpaceStoryHero";
import SpaceStoryImage from "@/components/SpaceStoryImage";
import useStory from "@/hooks/useStory";
import Article from "@/types/Article";

export interface Props
  extends Omit<
    Article.Get,
    | "authorUids"
    | "body"
    | "updatedBy"
    | "updatedByUid"
    | "createdAt"
    | "createdBy"
    | "createdByUid"
    | "spaceId"
  > {
  namespaceId: string;
  noSwitch?: boolean;
  variant: "small" | "medium";
}

export default function SpaceStoryCard({
  noSwitch = false,
  id,
  image,
  namespaceId,
  updatedAt,
  time,
  title,
  subtitle,
  pricing,
  variant,
}: Props): JSX.Element {
  const {storySwitch} = useStory();

  return (
    <Link
      key={id}
      href={`${namespaceId === "" ? "" : "/"}${namespaceId}/${id}`}
    >
      <a
        className={clsx(
          "w-full my-4 px-1 sm:px-2 md:px-3 xl:px-4 shadow-lg sm:shadow-none sm:my-2",
          {
            "md:w-1/2 lg:w-1/3":
              (!noSwitch && storySwitch && variant === "small") ||
              (noSwitch && variant === "small"),
            "md:w-1/2 lg:w-2/3":
              (!noSwitch && storySwitch && variant === "medium") ||
              (noSwitch && variant === "medium"),
            "md:w-full md:py-2": !noSwitch && !storySwitch,
          },
        )}
      >
        <div
          className={clsx("rounded sm:rounded-2xl md:rounded-lg group", {
            "md:flex md:flex-col": (!noSwitch && storySwitch) || noSwitch,
            "md:flex md:flex-row items-center": !noSwitch && !storySwitch,
          })}
        >
          <SpaceStoryImage
            image={image}
            title={title}
            noSwitch={noSwitch}
            namespaceId={namespaceId}
          />
          <SpaceStoryHero
            time={time}
            title={title}
            subtitle={subtitle}
            updatedAt={updatedAt}
            pricing={pricing}
          />
        </div>
      </a>
    </Link>
  );
}
