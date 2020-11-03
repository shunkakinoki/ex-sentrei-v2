import dynamic from "next/dynamic";

import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";

export type Props = Pick<ContainerDashboardProps, "namespaceId">;

const DashboardBrandingBasicSection = dynamic(
  () => import("@/components/DashboardBrandingBasicSection"),
  {
    ssr: false,
  },
);

const DashboardBrandingDomainSection = dynamic(
  () => import("@/components/DashboardBrandingDomainSection"),
  {
    ssr: false,
  },
);

export default function DashboardSettingsScreen({
  namespaceId,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerDashboard type="branding" namespaceId={namespaceId}>
        <div className="container my-6 sm:mx-3 md:mx-6 md:mt-10">
          <DashboardBrandingBasicSection namespaceId={namespaceId} />
          <div className="hidden sm:block">
            <div className="py-5 sm:py-8 md:py-12 lg:py-16 xl:py-20">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          <DashboardBrandingDomainSection namespaceId={namespaceId} />
        </div>
      </ContainerDashboard>
    </ContainerRoot>
  );
}
