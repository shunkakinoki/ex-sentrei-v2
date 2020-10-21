import BlogScreen, {Props as BlogScreenProps} from "@/components/BlogScreen";

export type Props = Omit<BlogScreenProps, "namespace">;

export default function DemoScreen({
  articles,
  author,
  blog,
  current,
}: Props): JSX.Element {
  return (
    <BlogScreen
      articles={articles}
      author={author}
      blog={blog}
      current={current}
      namespace="demo"
    />
  );
}
