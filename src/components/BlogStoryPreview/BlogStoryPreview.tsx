import BlogStoryImage from "@/components/BlogStoryImage";
import BlogStoryBanner from "@/components/BlogStoryBanner";

export default function BlogStoryPreview(): JSX.Element {
  return (
    <div className="group">
      <BlogStoryImage />
      <BlogStoryBanner title="First Post" />
    </div>
  );
}
