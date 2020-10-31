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
  extends Pick<ContainerDashboardProps, "namespaceId">,
    DashboardCustomersTableProps {
  customers: Customer[];
}

export default function DashboardCustomersScreen({
  namespaceId,
  customers,
  current,
  total,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="customers" namespaceId={namespaceId}>
        <DashboardCustomersTable
          customers={customers}
          current={current}
          total={total}
          namespaceId={`${namespaceId}/dashboard/customers`}
        />
      </ContainerDashboard>
    </ContainerRoot>
  );
}
