import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashboardCustomersTable, {
  Props as DashboardCustomersTableProps,
} from "@/components/DashboardCustomersTable";
import HeaderRoot from "@/components/HeaderRoot";
import Customer from "@/types/Customer";

export interface Props
  extends Pick<ContainerDashboardProps, "namespace">,
    DashboardCustomersTableProps {
  customers: Customer[];
}

export default function DashboardCustomersScreen({
  namespace,
  customers,
  current,
  total,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="customers" namespace={namespace}>
        <DashboardCustomersTable
          customers={customers}
          current={current}
          total={total}
          namespace={`${namespace}/dashboard/customers`}
        />
      </ContainerDashboard>
    </ContainerRoot>
  );
}
