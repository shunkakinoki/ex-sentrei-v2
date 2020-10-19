export interface Props {
  src: string;
  title: string;
}

export default function BlogStoryImage({src, title}: Props): JSX.Element {
  return (
    <div className="transition duration-300 ease-in-out transform shadow-none md:hover:-translate-y-1 md:shadow-lg xl:shadow-xl group-hover:shadow-none md:group-hover:shadow-2xl">
      <img
        alt={`Story Cover for ${title}`}
        src={src}
        className="object-cover w-full h-40 rounded-sm sm:h-64"
      />
    </div>
  );
}
