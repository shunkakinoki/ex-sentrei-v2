import ArticleScreen, {
  Props as ArticleScreenProps,
} from "@/components/ArticleScreen";
import DemoBanner from "@/components/DemoBanner";

export type Props = Omit<ArticleScreenProps, "namespaceId">;

export default function DemoArticleScreen({
  authors,
  article,
  moreArticles,
}: Props): JSX.Element {
  return (
    <>
      <DemoBanner />
      <ArticleScreen
        authors={authors}
        article={article}
        moreArticles={moreArticles}
        namespaceId="demo"
      />
    </>
  );
}
