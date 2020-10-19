import BlogStoryImage from "@/components/BlogStoryImage";
import BlogStoryBanner from "@/components/BlogStoryBanner";

export interface Props {
  title: string;
  subtitle?: string;
}

export default function BlogStoryPreview({
  title,
  subtitle,
}: Props): JSX.Element {
  return (
    <div className="group">
      <BlogStoryImage
        src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
        title={title}
      />
      <BlogStoryBanner title={title} subtitle={subtitle} />
    </div>
  );
}
