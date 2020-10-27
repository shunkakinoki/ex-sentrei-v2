import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SettingsNotificationsSection from "@/components/SettingsNotificationsSection";
import SettingsProfileSection from "@/components/SettingsProfileSection";

export default function SettingsScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <div className="container mx-3 my-6 md:mx-6 md:mt-10">
        <div className="flex items-center mb-6 md:mb-8 lg:mb-12">
          <h3 className="flex-grow-0 px-2 py-2 text-3xl font-semibold text-gray-700 md:text-4xl">
            Settings
          </h3>
        </div>
        <SettingsProfileSection />
        <div className="hidden sm:block">
          <div className="py-5 sm:py-8 md:py-12 lg:py-16 xl:py-20">
            <div className="border-t border-gray-200" />
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <SettingsNotificationsSection />
        </div>
      </div>
    </ContainerRoot>
  );
}
