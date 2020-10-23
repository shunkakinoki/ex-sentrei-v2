import BlogStoryImage from "@/components/BlogStoryImage";
import BlogStoryHero from "@/components/BlogStoryHero";
import clsx from "clsx";
import Article from "@/types/Article";
import Link from "next/link";

export interface Props extends Omit<Article, "body"> {
  namespace: string;
  variant: "small" | "medium" | "large";
}

export default function BlogStoryCard({
  date,
  image,
  namespace,
  slug,
  time,
  title,
  subtitle,
  pricing,
  variant,
}: Props): JSX.Element {
  return (
    <Link href={`/${namespace}/${slug}`}>
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
          <BlogStoryImage image={image} title={title} />
          <BlogStoryHero
            date={date}
            time={time}
            title={title}
            subtitle={subtitle}
            pricing={pricing}
          />
        </div>
      </a>
    </Link>
  );
}
