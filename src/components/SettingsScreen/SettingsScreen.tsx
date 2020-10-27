import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";
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
      </div>
    </ContainerRoot>
  );
}
