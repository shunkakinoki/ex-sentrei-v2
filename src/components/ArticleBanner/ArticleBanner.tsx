import Article from "@/types/Article";

export type Props = Pick<Article, "title" | "subtitle">;

export default function ArticleBanner({title, subtitle}: Props): JSX.Element {
  return (
    <div className="px-4 pb-1 mx-auto mt-10 md:pb-2 sm:mt-8 sm:px-6 md:mt-12 lg:mt-16 lg:px-8 xl:mt-20">
      <div className="relative overflow-hidden bg-white">
        <div className="relative z-10 flex justify-center max-w-screen-xl mx-auto bg-white md:max-w-2xl lg:max-w-3xl ">
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
  );
}
