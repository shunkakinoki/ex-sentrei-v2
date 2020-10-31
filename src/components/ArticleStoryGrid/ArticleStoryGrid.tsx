import BlogStoryCard from "@/components/BlogStoryCard";
import Article from "@/types/Article";

export interface Props {
  articles: Article[];
  namespaceId: string;
}

export default function ArticleStoryGrid({
  articles,
  namespaceId,
}: Props): JSX.Element {
  return (
    <section className="mt-4 mb-8 sm:mt-8 md:mt-16 lg:mt-24 xl:mt-32 ">
      <div className="flex items-center mb-6 md:mb-8 lg:mb-12">
        <div className="flex-grow-0 px-4 py-2 m-2 font-semibold text-center text-gray-600">
          Other articles from {namespaceId}
        </div>
        <div className="flex-grow px-4 py-2 m-2 border-gray-300">
          <div className="flex justify-between border-b-2 md:justify-start md:space-x-10" />
        </div>
      </div>
      <div className="flex flex-wrap mt-4 sm:mt-8 md:mt-12 lg:mt-16">
        {articles.map((article, index) => {
          return (
            <BlogStoryCard
              key={article.slug}
              date={article.date}
              image={article.image}
              pricing={article.pricing}
              time={article.time}
              title={article.title}
              slug={article.slug}
              subtitle={article.subtitle}
              status={article.status}
              namespaceId={namespaceId}
              variant={index % 4 === 0 || index % 4 === 3 ? "small" : "medium"}
            />
          );
        })}
      </div>
    </section>
  );
}
