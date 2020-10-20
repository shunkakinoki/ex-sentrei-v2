import BlogStoryImage from "@/components/BlogStoryImage";
import BlogStoryBanner from "@/components/BlogStoryBanner";
import clsx from "clsx";
import Article from "@/types/Article";

export interface Props extends Article {
  variant: "small" | "medium" | "large";
}

export default function BlogStoryCard({
  image,
  title,
  subtitle,
  variant,
}: Props): JSX.Element {
  return (
    <div
      className={clsx(
        "w-full my-4 px-0 sm:px-2 md:px-3 xl:px-4 shadow-lg sm:shadow-none sm:my-2 md:w-1/2",
        {
          "lg:w-1/3": variant === "small",
          "lg:w-2/3": variant === "medium",
        },
      )}
    >
      <div className="rounded sm:rounded-2xl md:rounded-lg group">
        <BlogStoryImage image={image} title={title} />
        <BlogStoryBanner title={title} subtitle={subtitle} />
      </div>
    </div>
  );
}
