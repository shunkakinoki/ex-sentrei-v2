import ContainerCenter from "@/components/ContainerCenter";
import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SeoSpace from "@/components/SeoSpace";
import SubscribeForm from "@/components/SubscribeForm";

export default function SubscribeScreen(): JSX.Element {
  return (
    <>
      <SeoSpace title="Subscribe" description="Subscribe to the publication" />
      <HeaderRoot />
      <ContainerRoot>
        <ContainerCenter>
          <SubscribeForm />
        </ContainerCenter>
      </ContainerRoot>
    </>
  );
}
