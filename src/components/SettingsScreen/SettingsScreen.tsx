import HeaderRoot from "@/components/HeaderRoot";
import ContainerRoot from "@/components/ContainerRoot";
import SettingsProfileSection from "@/components/SettingsProfileSection";

export default function SettingsScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <div className="container mx-auto my-6 md:mt-10 ">
        <div className="flex items-center mb-6 md:mb-8 lg:mb-12">
          <h3 className="flex-grow-0 px-2 py-2 m-2 text-3xl font-semibold text-gray-700 md:text-4xl">
            Settings
          </h3>
        </div>
        <div className="px-3 md:grid md:grid-cols-3 md:gap-6">
          <SettingsProfileSection />
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </ContainerRoot>
  );
}
