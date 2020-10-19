import BlogStoryCard from "@/components/BlogStoryCard";

export default function BlogStoryGrid(): JSX.Element {
  return (
    <section className="mt-8 mb-16 sm:mt-16 md:mb-12 lg:mb-20">
      <div className="flex flex-wrap mb-8 -mx-2">
        <BlogStoryCard
          title="First newsletter post"
          subtitle="My first newsletter post in my life"
          variant="small"
        />
        <BlogStoryCard title="Second newsletter post" variant="medium" />
        <BlogStoryCard
          title="Third newsletter post"
          subtitle="My third newsletter post in my life"
          variant="medium"
        />
      </div>
    </section>
  );
}
