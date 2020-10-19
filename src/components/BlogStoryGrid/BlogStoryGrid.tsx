import BlogStoryPreview from "@/components/BlogStoryPreview";

export default function BlogStoryGrid(): JSX.Element {
  return (
    <div className="grid grid-cols-1 row-gap-20 mb-32 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 md:row-gap-32">
      <BlogStoryPreview />
    </div>
  );
}
