import clsx from "clsx";
import Link from "next/link";

import SpaceStoryHero from "@/components/SpaceStoryHero";
import SpaceStoryImage from "@/components/SpaceStoryImage";
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
  variant: "small" | "medium" | "large";
}

export default function SpaceStoryCard({
  image,
  namespaceId,
  updatedAt,
  time,
  title,
  subtitle,
  pricing,
  uid,
  variant,
}: Props): JSX.Element {
  return (
    <Link href={`${namespaceId === "" ? "" : "/"}${namespaceId}/${uid}`}>
      <a
        className={clsx(
          "w-full my-4 px-0 sm:px-2 md:px-3 xl:px-4 shadow-lg sm:shadow-none sm:my-2 md:w-1/2 ",
          {
            "lg:w-1/3": variant === "small",
            "lg:w-2/3": variant === "medium",
          },
        )}
      >
        <div className="rounded sm:rounded-2xl md:rounded-lg group">
          <SpaceStoryImage image={image} title={title} />
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
