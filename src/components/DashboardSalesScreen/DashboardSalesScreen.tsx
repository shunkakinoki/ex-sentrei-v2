import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashboardSalesHero from "@/components/DashboardSalesHero";
import HeaderRoot from "@/components/HeaderRoot";
import Sales from "@/types/Sales";

export interface Props extends Pick<ContainerDashboardProps, "namespace"> {
  sales: Sales;
}

export default function DashboardSalesScreen({
  namespace,
  sales,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="sales" namespace={namespace}>
        <DashboardSalesHero
          all={sales.all}
          allConfirmed={sales.allConfirmed}
          month={sales.month}
          monthConfirmed={sales.monthConfirmed}
          confirmed={sales.confirmed}
        />
      </ContainerDashboard>
    </ContainerRoot>
  );
}
