import Article from "@/types/Article";

export type Props = Pick<Article, "date" | "time" | "title" | "subtitle">;

export default function BlogStoryBanner({
  date,
  time,
  title,
  subtitle,
}: Props): JSX.Element {
  return (
    <div className="pb-4 pl-6 mt-3 overflow-auto sm:pb-4 sm:pl-3 md:pl-4 sm:mt-4">
      <div className="transition duration-500 ease-in-out group-hover:text-pink-500">
        <h3 className="font-serif text-2xl text-left truncate sm:text-3xl sm:text-center md:text-left">
          {title}
        </h3>
      </div>
      <h6 className="h-12 font-light text-gray-700 sm:pb-0 truncate-2-lines md:text-left">
        {subtitle}
      </h6>
      <p className="mt-1 font-medium text-left text-gray-500 truncate">
        {new Date(date).toDateString()}
        &nbsp;&middot;&nbsp;
        {time} min read
      </p>
    </div>
  );
}
