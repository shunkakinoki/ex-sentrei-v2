import Article from "@/types/Article";

export type Props = Pick<Article, "image" | "title">;

export default function ArticleImage({image, title}: Props): JSX.Element {
  return (
    <div className="shadow-md md:shadow-lg xl:shadow-xl">
      <img
        alt={`Story Cover for ${title}`}
        src={image}
        className="object-cover w-full h-40 bg-gray-400 sm:h-64"
      />
    </div>
  );
}
