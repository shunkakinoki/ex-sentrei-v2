import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashboardSettingsInfoSection from "@/components/DashboardSettingsInfoSection";
import HeaderRoot from "@/components/HeaderRoot";

export type Props = Pick<ContainerDashboardProps, "namespace">;

export default function DashboardSettingsScreen({
  namespace,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="settings" namespace={namespace}>
        <div className="container mx-3 my-6 md:mx-6 md:mt-10">
          <DashboardSettingsInfoSection />
        </div>
      </ContainerDashboard>
    </ContainerRoot>
  );
}
