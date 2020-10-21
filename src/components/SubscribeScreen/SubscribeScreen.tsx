/* eslint-disable jsx-a11y/label-has-associated-control */

import ContainerCenter from "@/components/ContainerCenter";
import SubscribeForm from "@/components/SubscribeForm";
import ContainerRoot from "@/components/ContainerRoot";
import LandingHeader from "@/components/LandingHeader";

export default function SubscribeScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <LandingHeader />
      <ContainerCenter>
        <SubscribeForm />
      </ContainerCenter>
    </ContainerRoot>
  );
}
