import BlogStoryImage from "@/components/BlogStoryImage";
import BlogStoryBanner from "@/components/BlogStoryBanner";
import clsx from "clsx";

export interface Props {
  title: string;
  subtitle?: string;
  variant: "small" | "medium" | "large";
}

export default function BlogStoryPreview({
  title,
  subtitle,
  variant,
}: Props): JSX.Element {
  return (
    <div
      className={clsx("w-full px-2 mb-4 md:w-1/2", {
        "lg:w-1/3": variant === "small",
        "lg:w-2/3": variant === "medium",
      })}
    >
      <div className="flex items-center justify-center p-3">
        <div className="group">
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
