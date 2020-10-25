import dynamic from "next/dynamic";

import ArticleHero from "@/components/ArticleHero";
import ArticleImage from "@/components/ArticleImage";
import ArticleStoryGrid from "@/components/ArticleStoryGrid";
import ArticleSubscribe from "@/components/ArticleSubscribe";
import ContainerRoot from "@/components/ContainerRoot";
import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import Article from "@/types/Article";

const ArticleBody = dynamic(() => import("@/components/ArticleBody"), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <div className="p-8 md:p-12 lg:p-16" />,
});

export interface Props {
  article: Article;
  more: Article[];
  namespace: string;
}

export default function ArticleScreen({
  article,
  more,
  namespace,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ArticleHero
        authors={article.authors}
        date={article.date}
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
        <ArticleSubscribe namespace={namespace} />
      )}
      <ArticleStoryGrid articles={more} namespace={namespace} />
      <FooterRoot />
    </ContainerRoot>
  );
}
