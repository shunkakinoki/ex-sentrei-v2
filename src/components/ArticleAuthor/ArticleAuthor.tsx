import Author from "@/types/Author";
import Article from "@/types/Article";

export interface Props extends Pick<Article, "date" | "time"> {
  authors: Author[];
}

export default function ArticleAuthor({
  authors,
  date,
  time,
}: Props): JSX.Element {
  return (
    <div className="px-4 mx-auto mt-1 mb-16 md:max-w-screen-sm sm:px-6 lg:px-8 md:mt-3 md:mb-12 xl:mt-6 lg:mb-20">
      <section className="px-4 py-2 mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <img
              className="inline object-cover w-12 h-12 mr-2 rounded-full"
              src={authors[0].image}
              alt={`Author ${authors[0].name}`}
            />
            <div className="flex flex-col mx-2">
              <a className="font-semibold text-gray-700 hover:underline">
                {authors[0].name}
              </a>
              <span className="mx-1 text-xs text-gray-600">
                {new Date(date).toDateString()}
              </span>
            </div>
          </div>
          <h3 className="pr-1 mt-1 text-xs text-gray-600 md:pr-3 md:text-md">
            {time} min read
          </h3>
        </div>
      </section>
    </div>
  );
}
