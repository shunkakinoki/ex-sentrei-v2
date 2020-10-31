import ArticleScreen, {
  Props as ArticleScreenProps,
} from "@/components/ArticleScreen";

export type Props = Omit<ArticleScreenProps, "namespaceId">;

export default function DemoArticleScreen({article, more}: Props): JSX.Element {
  return <ArticleScreen article={article} more={more} namespaceId="demo" />;
}
