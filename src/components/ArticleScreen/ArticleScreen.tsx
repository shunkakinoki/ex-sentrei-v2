import LandingHeader from "@/components/LandingHeader";
import RootContainer from "@/components/RootContainer";
import LandingFooter from "@/components/LandingFooter";
import ArticleBanner from "@/components/ArticleBanner";
import ArticleAuthor from "@/components/ArticleAuthor";
import ArticleImage from "@/components/ArticleImage";
import Author from "@/types/Author";
import Article from "@/types/Article";
import dynamic from "next/dynamic";
import ArticleSubscription from "@/components/ArticleSubscription";
import ArticleStoryGrid from "@/components/ArticleStoryGrid";

const ArticleBody = dynamic(() => import("@/components/ArticleBody"), {
  ssr: false,
});

export interface Props {
  article: Article;
  authors: Author[];
  more: Article[];
}

export default function ArticleScreen({
  authors,
  article,
  more,
}: Props): JSX.Element {
  return (
    <RootContainer>
      <LandingHeader />
      <ArticleBanner title={article.title} subtitle={article?.subtitle} />
      <ArticleAuthor
        authors={authors}
        date={article.date}
        time={article.time}
      />
      {article.image && (
        <ArticleImage title={article.title} image={article.image} />
      )}
      {article.pricing === "free" && article.body && (
        <ArticleBody body={article.body} />
      )}
      {article.pricing === "subscription" && article.excerpt && (
        <ArticleBody excerpt body={article.excerpt} />
      )}
      {article.pricing === "subscription" && <ArticleSubscription />}
      <ArticleStoryGrid articles={more} namespace="demo" />
      <LandingFooter />
    </RootContainer>
  );
}
