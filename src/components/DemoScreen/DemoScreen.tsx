import LandingHeader from "@/components/LandingHeader";
import BlogBanner from "@/components/BlogBanner";
import RootContainer from "@/components/RootContainer";

export default function DemoScreen(): JSX.Element {
  return (
    <RootContainer>
      <LandingHeader />
      <BlogBanner
        title="My awesome newsletter."
        subtitle="Relax. I'm so awesome"
      />
    </RootContainer>
  );
}
