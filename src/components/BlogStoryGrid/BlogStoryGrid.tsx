import BlogStoryCard from "@/components/BlogStoryCard";
import Article from "@/types/Article";

export interface Props {
  articles: Article[];
  namespace: string;
}

export default function BlogStoryGrid({
  articles,
  namespace,
}: Props): JSX.Element {
  return (
    <section className="mt-8 mb-16 sm:mt-16 md:mb-12 lg:mb-20">
      <div className="flex flex-wrap mb-8 -mx-2">
        {articles.map((article, index) => {
          return (
            <BlogStoryCard
              key={article.slug}
              date={article.date}
              image={article.image}
              time={article.time}
              title={article.title}
              slug={article.slug}
              subtitle={article.subtitle}
              namespace={namespace}
              variant={index % 4 === 0 || index % 4 === 3 ? "small" : "medium"}
            />
          );
        })}
      </div>
    </section>
  );
}
