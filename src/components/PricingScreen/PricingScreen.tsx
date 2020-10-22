import HeaderRoot from "@/components/HeaderRoot";
import PricingBanner from "@/components/PricingBanner";
import ContainerRoot from "@/components/ContainerRoot";
import FooterRoot from "@/components/FooterRoot";

export default function PricingScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <PricingBanner />
      <FooterRoot />
    </ContainerRoot>
  );
}
