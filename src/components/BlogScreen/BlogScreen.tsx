import BlogHero, {Props as BlogHeroProps} from "@/components/BlogHero";
import BlogPagination from "@/components/BlogPagination";
import BlogStoryGrid, {
  Props as BlogStoryGridProps,
} from "@/components/BlogStoryGrid";
import ContainerRoot from "@/components/ContainerRoot";
import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import {totalPages} from "@/const/demo";

export interface Props extends BlogStoryGridProps {
  blog: Omit<BlogHeroProps, "namespace">;
  current: number;
  namespace: string;
}

export default function BlogScreen({
  articles,
  blog,
  current,
  namespace,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <BlogHero
        authors={blog.authors}
        title={blog.title}
        subtitle={blog.subtitle}
        namespace={namespace}
      />
      <BlogStoryGrid articles={articles} namespace={namespace} />
      <BlogPagination
        current={current}
        total={totalPages}
        namespace={namespace}
      />
      <FooterRoot />
    </ContainerRoot>
  );
}
