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
import Profile from "@/types/Profile";

export interface Props extends BlogStoryGridProps, PaginationBaseProps {
  author: Profile.Get;
  blog: Omit<BlogHeroProps, "author" | "name" | "namespaceId">;
}

export default function BlogScreen({
  author,
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
        author={author}
        title={blog.title}
        description={blog.description}
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
