export interface Props {
  title: string;
  subtitle?: string;
}

export default function BlogBanner({title, subtitle}: Props): JSX.Element {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12 lg:mt-24 lg:mb-20">
      <h1 className="w-2/3 text-6xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
        {title}
      </h1>
      <h4 className="w-1/3 mt-5 text-lg text-center md:text-left md:pl-8">
        {subtitle}
      </h4>
    </section>
  );
}
