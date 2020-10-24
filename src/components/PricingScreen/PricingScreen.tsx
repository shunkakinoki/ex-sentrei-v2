import ContainerRoot from "@/components/ContainerRoot";
import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import PricingHero from "@/components/PricingHero";
import PricingTable from "@/components/PricingTable";

export default function PricingScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <PricingHero />
      <PricingTable />
      <FooterRoot />
    </ContainerRoot>
  );
}
