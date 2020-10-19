import Blog from "@/types/Blog";

export type Props = Blog;

export default function BlogBanner({title, subtitle}: Props): JSX.Element {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12 lg:mt-24 lg:mb-20">
      <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-center text-gray-900 md:text-left md:w-2/3 sm:text-5xl sm:leading-none md:text-6xl">
        {title}
      </h1>
      <h4 className="mt-5 text-lg text-center md:w-1/3 md:text-left md:pl-8">
        {subtitle}
      </h4>
    </section>
  );
}
