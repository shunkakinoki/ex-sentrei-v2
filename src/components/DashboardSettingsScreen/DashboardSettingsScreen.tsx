import dynamic from "next/dynamic";

import ContainerDashboard, {
  Props as ContainerDashboardProps,
} from "@/components/ContainerDashboard";
import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SeoApp from "@/components/SeoApp";

export type Props = Pick<ContainerDashboardProps, "namespaceId">;

const DashboardSettingsNotificationsSection = dynamic(
  () => import("@/components/DashboardSettingsNotificationsSection"),
  {
    ssr: false,
  },
);

const DashboardSettingsSocialSection = dynamic(
  () => import("@/components/DashboardSettingsSocialSection"),
  {
    ssr: false,
  },
);

export default function DashboardSettingsScreen({
  namespaceId,
}: Props): JSX.Element {
  return (
    <>
      <SeoApp title="Settings" />
      <ContainerRoot>
        <HeaderRoot />
        <ContainerDashboard type="settings" namespaceId={namespaceId}>
          <div className="container my-6 sm:mx-3 md:mx-6 md:mt-10">
            <DashboardSettingsNotificationsSection namespaceId={namespaceId} />
            <div className="hidden sm:block">
              <div className="py-5 sm:py-8 md:py-12 lg:py-16 xl:py-20">
                <div className="border-t border-gray-200" />
              </div>
            </div>
            <DashboardSettingsSocialSection namespaceId={namespaceId} />
          </div>
        </ContainerDashboard>
      </ContainerRoot>
    </>
  );
}
