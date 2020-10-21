import LandingHeader from "@/components/LandingHeader";
import BlogBanner, {Props as BlogBannerProps} from "@/components/BlogBanner";
import ContainerRoot from "@/components/ContainerRoot";
import BlogAuthor, {Props as BlogAuthorProps} from "@/components/BlogAuthor";
import BlogStoryGrid, {
  Props as BlogStoryGridProps,
} from "@/components/BlogStoryGrid";
import BlogPagination from "@/components/BlogPagination";
import {totalPages} from "@/const/demo";
import LandingFooter from "@/components/LandingFooter";

export interface Props extends BlogStoryGridProps {
  author: BlogAuthorProps;
  blog: Omit<BlogBannerProps, "namespace">;
  current: number;
  namespace: string;
}

export default function BlogScreen({
  articles,
  author,
  blog,
  current,
  namespace,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <LandingHeader />
      <BlogBanner
        title={blog.title}
        subtitle={blog.subtitle}
        namespace={namespace}
      />
      <BlogAuthor bio={author.bio} image={author.image} name={author.name} />
      <BlogStoryGrid articles={articles} namespace={namespace} />
      <BlogPagination
        current={current}
        total={totalPages}
        namespace={namespace}
      />
      <LandingFooter />
    </ContainerRoot>
  );
}
