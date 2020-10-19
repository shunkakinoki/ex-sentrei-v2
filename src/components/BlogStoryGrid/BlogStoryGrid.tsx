import BlogStoryPreview from "@/components/BlogStoryPreview";

export default function BlogStoryGrid(): JSX.Element {
  return (
    <section className="mt-16 mb-16md:mb-12 lg:mt-24 lg:mb-20">
      <div className="grid grid-cols-1 row-gap-20 mb-32 md:grid-cols-2 md:col-gap-16 lg:grid-cols-3 lg:col-gap-32 md:row-gap-32">
        <BlogStoryPreview
          title="First Post"
          variant="small"
          subtitle="This is my first newsletter post on this platform."
        />
      </div>
    </section>
  );
}
