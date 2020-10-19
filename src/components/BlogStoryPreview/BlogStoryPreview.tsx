import BlogStoryImage from "@/components/BlogStoryImage";
import BlogStoryBanner from "@/components/BlogStoryBanner";
import clsx from "clsx";

export interface Props {
  title: string;
  variant?: "small" | "middle" | "large";
}

export default function BlogStoryPreview({
  title,
  variant = "small",
}: Props): JSX.Element {
  return (
    <div
      className={clsx("group", {
        "grid-cols-1": variant === "small",
      })}
    >
      <div className="mb-5">
        <BlogStoryImage
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          title={title}
        />
      </div>
      <BlogStoryBanner title={title} />
    </div>
  );
}
