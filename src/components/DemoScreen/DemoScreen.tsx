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

export interface Props extends Omit<BlogStoryGridProps, "namespace"> {
  author: BlogAuthorProps;
  blog: BlogBannerProps;
  current: number;
}

export default function DemoScreen({
  articles,
  author,
  blog,
  current,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <LandingHeader />
      <BlogBanner
        namespace="demo"
        title={blog.title}
        subtitle={blog.subtitle}
      />
      <BlogAuthor bio={author.bio} image={author.image} name={author.name} />
      <BlogStoryGrid articles={articles} namespace="demo" />
      <BlogPagination current={current} total={totalPages} namespace="demo" />
      <LandingFooter />
    </ContainerRoot>
  );
}
