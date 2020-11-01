import ArticleAuthor from "@/components/ArticleAuthor";
import ArticleAuthors from "@/components/ArticleAuthors";
import Article from "@/types/Article";
import Profile from "@/types/Profile";

export interface Props
  extends Pick<
    Article.Get,
    "createdAt" | "pricing" | "time" | "title" | "subtitle"
  > {
  authors: Profile.Get[];
}

export default function ArticleHero({
  authors,
  createdAt,
  pricing,
  time,
  title,
  subtitle,
}: Props): JSX.Element {
  return (
    <section>
      <div className="px-4 pb-1 mx-auto mt-10 md:pb-2 sm:mt-6 sm:px-6 md:mt-8 lg:mt-12 lg:px-8 xl:mt-16">
        <div className="relative overflow-hidden ">
          <div className="relative z-10 flex justify-center max-w-screen-xl mx-auto md:max-w-2xl lg:max-w-3xl ">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-center text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                {title}
              </h1>
              <h4 className="mt-4 text-center text-gray-600 sm:text-lg md:mt-5 md:text-xl md:mx-6 truncate-3-lines">
                {subtitle}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto mt-1 mb-8 md:max-w-screen-sm sm:px-6 lg:px-8 md:mt-3 md:mb-12 xl:mt-6 lg:mb-16">
        <div className="px-4 py-2 mt-2">
          <div className="flex items-center space-x-2 justify-left">
            {authors.length === 1 ? (
              <ArticleAuthor image={authors[0].image} name={authors[0].name} />
            ) : (
              <ArticleAuthors authors={authors} />
            )}
            <p className="flex items-center mt-1 font-medium text-center text-gray-500">
              {authors.length === 1 && authors[0].name}
              &nbsp;&middot;&nbsp;
              {createdAt}
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
        </div>
      </div>
    </section>
  );
}
