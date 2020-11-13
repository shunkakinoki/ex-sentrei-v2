import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SeoSpace from "@/components/SeoSpace";
import UpgradeHero from "@/components/UpgradeHero";
import UpgradeTable from "@/components/UpgradeTable";

export default function UpgradeScreen(): JSX.Element {
  return (
    <>
      <SeoSpace title="Upgrade" description="Upgrade to the publication" />
      <HeaderRoot />
      <ContainerRoot>
        <UpgradeHero />
        <UpgradeTable />
      </ContainerRoot>
    </>
  );
}
