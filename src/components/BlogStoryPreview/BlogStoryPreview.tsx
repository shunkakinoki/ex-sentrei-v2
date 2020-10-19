import BlogStoryImage from "@/components/BlogStoryImage";
import BlogStoryBanner from "@/components/BlogStoryBanner";
import clsx from "clsx";

export interface Props {
  variant?: "small" | "middle" | "large";
}

export default function BlogStoryPreview({
  variant = "small",
}: Props): JSX.Element {
  return (
    <div
      className={clsx("group", {
        "grid-cols-1": variant === "small",
      })}
    >
      <BlogStoryImage />
      <BlogStoryBanner title="First Post" />
    </div>
  );
}
