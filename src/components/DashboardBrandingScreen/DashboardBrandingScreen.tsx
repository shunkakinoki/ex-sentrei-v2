import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";

export type Props = Pick<ContainerDashboardProps, "namespace">;

export default function DashboardBrandingScreen({
  namespace,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="branding" namespace={namespace}>
        <></>
      </ContainerDashboard>
    </ContainerRoot>
  );
}
