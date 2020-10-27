import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashboardSettingsNotificationsSection from "@/components/DashboardSettingsNotificationsSection";
import HeaderRoot from "@/components/HeaderRoot";

export type Props = Pick<ContainerDashboardProps, "namespace">;

export default function DashboardSettingsScreen({
  namespace,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="settings" namespace={namespace}>
        <div className="container my-6 sm:mx-3 md:mx-6 md:mt-10">
          <DashboardSettingsNotificationsSection />
        </div>
      </ContainerDashboard>
    </ContainerRoot>
  );
}
