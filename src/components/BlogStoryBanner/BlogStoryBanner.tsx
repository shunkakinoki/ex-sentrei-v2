export interface Props {
  title: string;
  subtitle?: string;
}

export default function BlogStoryBanner({title, subtitle}: Props): JSX.Element {
  return (
    <div className="mt-5">
      <div className="transition duration-500 ease-in-out group-hover:text-pink-500">
        <h3 className="font-serif text-3xl text-center md:text-left md:pl-8">
          {title}
        </h3>
      </div>
      <h6 className="overflow-hidden text-gray-700 truncate-2-lines md:text-left md:pl-8">
        {subtitle}
      </h6>
    </div>
  );
}
