import LandingHeader from "@/components/LandingHeader";
import BlogBanner, {Props as BlogBannerProps} from "@/components/BlogBanner";
import RootContainer from "@/components/RootContainer";
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
    <RootContainer>
      <LandingHeader />
      <BlogBanner title={blog.title} subtitle={blog.subtitle} />
      <BlogAuthor bio={author.bio} image={author.image} name={author.name} />
      <BlogStoryGrid articles={articles} namespace="demo" />
      <BlogPagination current={current} total={totalPages} namespace="demo" />
      <LandingFooter />
    </RootContainer>
  );
}
