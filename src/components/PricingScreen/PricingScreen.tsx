import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import PricingHero from "@/components/PricingHero";
import PricingTable from "@/components/PricingTable";
import SeoLanding from "@/components/SeoLanding";

const PapercupsWidget = dynamic(() => import("@/components/PapercupsWidget"), {
  ssr: false,
});

export default function PricingScreen(): JSX.Element {
  return (
    <>
      <SeoLanding title="Pricing" />
      <HeaderRoot />
      <ContainerRoot>
        <PapercupsWidget />
        <PricingHero />
        <PricingTable />
      </ContainerRoot>
      <FooterRoot />
    </>
  );
}
