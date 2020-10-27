import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import DashboardBrandingBasicSection from "@/components/DashboardBrandingBasicSection";
import HeaderRoot from "@/components/HeaderRoot";

export type Props = Pick<ContainerDashboardProps, "namespace">;

export default function DashboardSettingsScreen({
  namespace,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="branding" namespace={namespace}>
        <div className="container my-6 sm:mx-3 md:mx-6 md:mt-10">
          <DashboardBrandingBasicSection />
        </div>
      </ContainerDashboard>
    </ContainerRoot>
  );
}
