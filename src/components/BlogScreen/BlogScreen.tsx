import BlogHero, {Props as BlogHeroProps} from "@/components/BlogHero";
import BlogStoryGrid, {
  Props as BlogStoryGridProps,
} from "@/components/BlogStoryGrid";
import ContainerRoot from "@/components/ContainerRoot";
import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import PaginationBase, {
  Props as PaginationBaseProps,
} from "@/components/PaginationBase";

export interface Props
  extends BlogStoryGridProps,
    PaginationBaseProps,
    Pick<BlogHeroProps, "isDemo"> {
  blog: Omit<BlogHeroProps, "namespace" | "isDemo">;
}

export default function BlogScreen({
  isDemo,
  articles,
  blog,
  current,
  total,
  namespace,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <BlogHero
        isDemo={isDemo}
        authors={blog.authors}
        title={blog.title}
        subtitle={blog.subtitle}
        namespace={namespace}
      />
      <BlogStoryGrid articles={articles} namespace={namespace} />
      <PaginationBase current={current} total={total} namespace={namespace} />
      <FooterRoot />
    </ContainerRoot>
  );
}
