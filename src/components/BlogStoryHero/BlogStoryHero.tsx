import Article from "@/types/Article";

export type Props = Pick<
  Article.Fields,
  "date" | "time" | "title" | "subtitle" | "pricing"
>;

export default function BlogStoryHero({
  date,
  time,
  title,
  subtitle,
  pricing,
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
      <p className="flex items-center mt-1 font-medium text-left text-gray-500">
        {new Date(date).toDateString()}
        &nbsp;&middot;&nbsp;
        {time} min read
        {pricing === "subscription" && <>&nbsp;&middot;&nbsp;</>}
        {pricing === "subscription" && (
          <svg
            className="w-4 h-4 mr-2 text-gray-600 fill-current"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        )}
      </p>
    </div>
  );
}
