import BlogStoryCard from "@/components/BlogStoryCard";
import Article from "@/types/Article";

export interface Props {
  articles: Article[];
}

export default function BlogStoryGrid({articles}: Props): JSX.Element {
  return (
    <section className="mt-8 mb-16 sm:mt-16 md:mb-12 lg:mb-20">
      <div className="flex flex-wrap mb-8 -mx-2">
        {articles.map((article, index) => {
          return (
            <BlogStoryCard
              key={article.slug}
              title={article.title}
              subtitle={article.subtitle}
              variant={index % 4 === 1 || index % 4 === 0 ? "small" : "medium"}
            />
          );
        })}
      </div>
    </section>
  );
}
