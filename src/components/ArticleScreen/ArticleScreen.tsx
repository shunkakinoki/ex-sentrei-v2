import LandingHeader from "@/components/LandingHeader";
import RootContainer from "@/components/RootContainer";
import LandingFooter from "@/components/LandingFooter";

export default function ArticleScreen(): JSX.Element {
  return (
    <RootContainer>
      <LandingHeader />
      <LandingFooter />
    </RootContainer>
  );
}
