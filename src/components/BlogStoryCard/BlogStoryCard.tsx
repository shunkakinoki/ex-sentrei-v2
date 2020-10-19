import BlogStoryImage from "@/components/BlogStoryImage";
import BlogStoryBanner from "@/components/BlogStoryBanner";
import clsx from "clsx";

export interface Props {
  title: string;
  subtitle?: string;
  variant: "small" | "medium" | "large";
}

export default function BlogStoryCard({
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
      <div className="flex items-center justify-center">
        <div className="rounded-3xl sm:rounded-md group">
          <BlogStoryImage
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
            title={title}
          />
          <BlogStoryBanner title={title} subtitle={subtitle} />
        </div>
      </div>
    </div>
  );
}
