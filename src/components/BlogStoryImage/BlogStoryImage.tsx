import Article from "@/types/Article";

export type Props = Pick<Article, "image" | "title">;

export default function BlogStoryImage({image, title}: Props): JSX.Element {
  return (
    <div className="transition duration-300 ease-in-out transform shadow-none md:hover:-translate-y-1 md:shadow-lg xl:shadow-xl group-hover:shadow-none md:group-hover:shadow-2xl">
      <img
        alt={`Story Cover for ${title}`}
        src={image}
        className="object-cover w-full h-40 bg-gray-400 sm:h-64"
      />
    </div>
  );
}
