import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashboardSettingsNotificationsSection from "@/components/DashboardSettingsNotificationsSection";
import HeaderRoot from "@/components/HeaderRoot";

export type Props = Pick<ContainerDashboardProps, "namespaceId">;

export default function DashboardSettingsScreen({
  namespaceId,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="settings" namespaceId={namespaceId}>
        <div className="container my-6 sm:mx-3 md:mx-6 md:mt-10">
          <DashboardSettingsNotificationsSection />
        </div>
      </ContainerDashboard>
    </ContainerRoot>
  );
}
