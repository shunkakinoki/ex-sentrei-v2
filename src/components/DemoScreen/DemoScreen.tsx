import LandingHeader from "@/components/LandingHeader";
import BlogBanner from "@/components/BlogBanner";
import RootContainer from "@/components/RootContainer";
import BlogAuthor from "@/components/BlogAuthor";

export default function DemoScreen(): JSX.Element {
  return (
    <RootContainer>
      <LandingHeader />
      <BlogBanner
        title="My awesome newsletter."
        subtitle="Relax. I'm so awesome"
      />
      <BlogAuthor
        bio="I'm an awesome guy. Take my word for it. Thank you guys for visiting my newsletter."
        image="https://avatars2.githubusercontent.com/u/39187513?s=460&u=bfbe022ea7318c5cb797ab4e9af5339e81bc85c8&v=4"
      />
    </RootContainer>
  );
}
