import Author from "@/types/Author";

export interface Props {
  authors: Author[];
}

export default function ArticleAuthor({authors}: Props): JSX.Element {
  return (
    <div className="flex justify-center mt-3 align-middle sm:mt-6">
      <div className="flex-shrink-0 px-4 py-2 m-2 text-center">
        <img
          className="inline object-cover w-12 h-12 mr-2 rounded-full"
          src={authors[0].image}
          alt={`Author ${authors[0].name}`}
        />
      </div>
      <div className="flex-initial px-4 py-2 m-2 text-center text-gray-600">
        <h4 className="text-lg text-center truncate-3-lines">
          {authors[0].bio}
        </h4>
      </div>
    </div>
  );
}
