import ArticleAuthor from "@/components/ArticleAuthor";
import Article from "@/types/Article";

export type Props = Pick<
  Article,
  "authors" | "date" | "time" | "title" | "subtitle"
>;

export default function ArticleHero({
  authors,
  date,
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
        <ArticleAuthor authors={authors} date={date} time={time} />
      </div>
    </section>
  );
}
