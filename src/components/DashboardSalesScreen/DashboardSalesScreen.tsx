import dynamic from "next/dynamic";

import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashboardSalesHero from "@/components/DashboardSalesHero";
import HeaderRoot from "@/components/HeaderRoot";
import SeoApp from "@/components/SeoApp";
import Sales from "@/types/Sales";

const DashboardSalesTable = dynamic(
  () => import("@/components/DashboardSalesTable"),
  {
    ssr: false,
  },
);

export interface Props extends Pick<ContainerDashboardProps, "namespaceId"> {
  sales: Sales;
}

export default function DashboardSalesScreen({
  namespaceId,
  sales,
}: Props): JSX.Element {
  return (
    <>
      <SeoApp title="Sales" />
      <HeaderRoot />
      <ContainerRoot>
        <ContainerDashboard type="sales" namespaceId={namespaceId}>
          <DashboardSalesHero
            all={sales.all}
            allConfirmed={sales.allConfirmed}
            month={sales.month}
            monthConfirmed={sales.monthConfirmed}
            confirmed={sales.confirmed}
          />
          <DashboardSalesTable />
        </ContainerDashboard>
      </ContainerRoot>
    </>
  );
}
