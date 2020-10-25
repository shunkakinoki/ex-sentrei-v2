import ArticleScreen, {
  Props as ArticleScreenProps,
} from "@/components/ArticleScreen";

export type Props = Omit<ArticleScreenProps, "isDemo" | "namespace">;

export default function DemoArticleScreen({article, more}: Props): JSX.Element {
  return (
    <ArticleScreen isDemo article={article} more={more} namespace="demo" />
  );
}
