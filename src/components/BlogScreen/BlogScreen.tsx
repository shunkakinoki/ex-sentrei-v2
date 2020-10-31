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

export interface Props extends BlogStoryGridProps, PaginationBaseProps {
  blog: Omit<BlogHeroProps, "name" | "namespaceId">;
}

export default function BlogScreen({
  articles,
  blog,
  current,
  total,
  namespaceId,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <BlogHero
        authors={blog.authors}
        title={blog.title}
        subtitle={blog.subtitle}
        namespaceId={namespaceId}
      />
      <BlogStoryGrid articles={articles} namespaceId={namespaceId} />
      <PaginationBase
        current={current}
        total={total}
        namespaceId={namespaceId}
      />
      <FooterRoot />
    </ContainerRoot>
  );
}
