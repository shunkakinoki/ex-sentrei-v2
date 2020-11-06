import ArticleScreen, {
  Props as ArticleScreenProps,
} from "@/components/ArticleScreen";

export type Props = Omit<ArticleScreenProps, "namespaceId">;

export default function DemoArticleScreen({
  authors,
  article,
  moreArticles,
}: Props): JSX.Element {
  return (
    <ArticleScreen
      authors={authors}
      article={article}
      moreArticles={moreArticles}
      namespaceId="demo"
    />
  );
}
