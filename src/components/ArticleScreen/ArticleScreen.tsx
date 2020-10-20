import LandingHeader from "@/components/LandingHeader";
import RootContainer from "@/components/RootContainer";
import LandingFooter from "@/components/LandingFooter";
import ArticleBanner from "@/components/ArticleBanner";
import ArticleAuthor from "@/components/ArticleAuthor";
import ArticleImage from "@/components/ArticleImage";
import ArticleBody from "@/components/ArticleBody";
import Author from "@/types/Author";
import Article from "@/types/Article";

export interface Props {
  article: Article;
  authors: Author[];
}

export default function ArticleScreen({authors, article}: Props): JSX.Element {
  return (
    <RootContainer>
      <LandingHeader />
      <ArticleBanner title={article.title} subtitle={article?.subtitle} />
      <ArticleAuthor
        authors={authors}
        date={article.date}
        time={article.time}
      />
      <ArticleImage title={article.title} image={article.image} />
      <ArticleBody body={article.body} />
      <LandingFooter />
    </RootContainer>
  );
}
