export interface Props {
  src: string;
  title: string;
}

export default function BlogStoryImage({src, title}: Props): JSX.Element {
  return (
    <div className="transition duration-300 ease-in-out transform shadow-sm sm:shadow-md md:shadow-md lg:shadow-lg xl:shadow-lg group-hover:shadow-2xl hover:-translate-y-1">
      <img
        alt={`Story Cover for ${title}`}
        src={src}
        className="object-cover w-full h-40 rounded-sm sm:h-64"
      />
    </div>
  );
}
