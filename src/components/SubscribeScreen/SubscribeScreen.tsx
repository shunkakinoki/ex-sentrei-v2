import ContainerCenter from "@/components/ContainerCenter";
import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SubscribeForm from "@/components/SubscribeForm";

export default function SubscribeScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerCenter>
        <SubscribeForm />
      </ContainerCenter>
    </ContainerRoot>
  );
}
