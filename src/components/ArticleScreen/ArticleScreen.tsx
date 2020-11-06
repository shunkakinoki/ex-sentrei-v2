import dynamic from "next/dynamic";

import ArticleHero, {Props as ArticleHeroProps} from "@/components/ArticleHero";
import ArticleImage from "@/components/ArticleImage";
import ArticleStoryGrid from "@/components/ArticleStoryGrid";
import ArticleSubscribe from "@/components/ArticleSubscribe";
import ContainerRoot from "@/components/ContainerRoot";
import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import Article from "@/types/Article";

const ArticleBody = dynamic(() => import("@/components/ArticleBody"), {
  // eslint-disable-next-line react/display-name
  loading: () => <div className="p-8 md:p-12 lg:p-16" />,

  ssr: false,
});

export interface Props extends Pick<ArticleHeroProps, "authors"> {
  article: Article.Get;
  moreArticles: Article.Get[];
  namespaceId: string;
}

export default function ArticleScreen({
  authors,
  article,
  moreArticles,
  namespaceId,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ArticleHero
        authors={authors}
        createdAt={article.createdAt}
        pricing={article.pricing}
        time={article.time}
        title={article.title}
        subtitle={article?.subtitle}
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
      {article.pricing === "subscription" && (
        <ArticleSubscribe namespaceId={namespaceId} />
      )}
      {moreArticles.length >= 1 && (
        <ArticleStoryGrid
          articles={moreArticles}
          namespaceId={namespaceId}
          title={article.title}
        />
      )}
      <FooterRoot />
    </ContainerRoot>
  );
}
