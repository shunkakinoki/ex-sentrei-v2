import BlogScreen, {Props as BlogScreenProps} from "@/components/BlogScreen";
import DemoBanner from "@/components/DemoBanner";

export type Props = Omit<BlogScreenProps, "namespace">;

export default function DemoScreen({
  articles,
  author,
  blog,
  current,
}: Props): JSX.Element {
  return (
    <>
      <DemoBanner />
      <BlogScreen
        articles={articles}
        author={author}
        blog={blog}
        current={current}
        namespace="demo"
      />
    </>
  );
}
