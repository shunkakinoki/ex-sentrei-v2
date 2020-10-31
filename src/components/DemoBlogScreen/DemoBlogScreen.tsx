import BlogScreen, {Props as BlogScreenProps} from "@/components/BlogScreen";
import DemoBanner from "@/components/DemoBanner";

export type Props = Omit<BlogScreenProps, "namespaceId">;

export default function DemoBlogScreen({
  articles,
  blog,
  current,
  total,
}: Props): JSX.Element {
  return (
    <>
      <DemoBanner />
      <BlogScreen
        articles={articles}
        blog={blog}
        current={current}
        total={total}
        namespaceId="demo"
      />
    </>
  );
}
