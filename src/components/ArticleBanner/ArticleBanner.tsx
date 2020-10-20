import Article from "@/types/Article";

export type Props = Pick<Article, "title" | "subtitle">;

export default function ArticleBanner({title, subtitle}: Props): JSX.Element {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:mb-12 lg:mt-24 lg:mb-20">
      <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-center text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
        {title}
      </h1>
      <h4 className="mt-5 text-lg text-center ">{subtitle}</h4>
    </section>
  );
}
