import ContainerCenter from "@/components/ContainerCenter";
import SubscribeForm from "@/components/SubscribeForm";
import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";

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
