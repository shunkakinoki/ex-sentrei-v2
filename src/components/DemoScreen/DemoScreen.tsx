import LandingHeader from "@/components/LandingHeader";
import BlogBanner, {Props as BlogBannerProps} from "@/components/BlogBanner";
import RootContainer from "@/components/RootContainer";
import BlogAuthor, {Props as BlogAuthorProps} from "@/components/BlogAuthor";
import BlogStoryGrid, {
  Props as BlogStoryGridProps,
} from "@/components/BlogStoryGrid";

export interface Props extends BlogStoryGridProps {
  author: BlogAuthorProps;
  blog: BlogBannerProps;
}

export default function DemoScreen({
  articles,
  author,
  blog,
}: Props): JSX.Element {
  return (
    <RootContainer>
      <LandingHeader />
      <BlogBanner title={blog.title} subtitle={blog.subtitle} />
      <BlogAuthor bio={author.bio} image={author.image} name={author.name} />
      <BlogStoryGrid articles={articles} />
    </RootContainer>
  );
}
