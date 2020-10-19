import BlogStoryPreview from "@/components/BlogStoryPreview";

export default function BlogStoryGrid(): JSX.Element {
  return (
    <section className="mt-16 mb-16 md:mb-12 lg:mt-24 lg:mb-20">
      <div className="flex flex-wrap mb-8 -mx-2">
        <BlogStoryPreview
          title="First newsletter post"
          subtitle="My first newsletter post in my life"
          variant="small"
        />
        <BlogStoryPreview
          title="Second newsletter post"
          subtitle="My second newsletter post in my life"
          variant="medium"
        />
        <BlogStoryPreview
          title="Third newsletter post"
          subtitle="My third newsletter post in my life"
          variant="medium"
        />
      </div>
    </section>
  );
}
