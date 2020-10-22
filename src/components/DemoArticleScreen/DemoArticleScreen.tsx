import ArticleScreen, {
  Props as ArticleScreenProps,
} from "@/components/ArticleScreen";

export type Props = Omit<ArticleScreenProps, "namespace">;

export default function DemoArticleScreen({
  article,
  authors,
  more,
}: Props): JSX.Element {
  return (
    <ArticleScreen
      article={article}
      authors={authors}
      more={more}
      namespace="demo"
    />
  );
}
