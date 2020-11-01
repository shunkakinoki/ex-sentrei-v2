import ArticleScreen, {
  Props as ArticleScreenProps,
} from "@/components/ArticleScreen";

export type Props = Omit<ArticleScreenProps, "namespaceId">;

export default function DemoArticleScreen({
  authors,
  article,
  more,
}: Props): JSX.Element {
  return (
    <ArticleScreen
      authors={authors}
      article={article}
      more={more}
      namespaceId="demo"
    />
  );
}
