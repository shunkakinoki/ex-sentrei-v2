import Article from "@/types/Article";

export type Props = Pick<
  Article,
  "date" | "time" | "title" | "subtitle" | "pricing"
>;

export default function BlogStoryBanner({
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
            className="w-3 h-3 mr-2 text-gray-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
        )}
      </p>
    </div>
  );
}
