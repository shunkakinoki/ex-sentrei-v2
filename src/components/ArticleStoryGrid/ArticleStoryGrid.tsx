import SpaceStoryCard from "@/components/SpaceStoryCard";
import Article from "@/types/Article";
import Space from "@/types/Space";

export interface Props extends Pick<Space.Get, "title"> {
  articles: Article.Get[];
  namespaceId: string;
}

export default function ArticleStoryGrid({
  articles,
  namespaceId,
  title,
}: Props): JSX.Element {
  return (
    <section className="container w-full mx-auto mt-4 mb-8 sm:mt-8 md:mt-16 lg:mt-24 xl:mt-32 ">
      <div className="flex items-center justify-center md:justify-start">
        <div className="flex-grow-0 px-4 py-2 m-2 font-semibold text-center text-gray-600">
          Other articles from {title}
        </div>
        <div className="flex-grow px-4 py-2 m-2 border-gray-300">
          <div className="flex justify-between border-b-2 md:justify-start md:space-x-10" />
        </div>
      </div>
      <div className="flex flex-wrap mt-4 sm:mt-8 md:mt-12 lg:mt-16">
        {articles.map((article, index) => {
          return (
            <SpaceStoryCard
              key={article.id}
              noSwitch
              updatedAt={article.updatedAt}
              image={article.image}
              pricing={article.pricing}
              time={article.time}
              title={article.title}
              subtitle={article.subtitle}
              status={article.status}
              namespaceId={namespaceId}
              id={article.id}
              variant={index % 4 === 0 || index % 4 === 3 ? "small" : "medium"}
            />
          );
        })}
      </div>
    </section>
  );
}
