import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SeoApp from "@/components/SeoApp";

export default function ProfileScreen(): JSX.Element {
  return (
    <>
      <SeoApp title="Profile" />
      <ContainerRoot>
        <HeaderRoot />
      </ContainerRoot>
    </>
  );
}
