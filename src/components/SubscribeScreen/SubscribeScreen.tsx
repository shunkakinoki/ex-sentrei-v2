import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SeoSpace from "@/components/SeoSpace";
import {Props as SubscribeFormProps} from "@/components/SubscribeForm";
import SubscribeHero from "@/components/SubscribeHero";

const SubscribeForm = dynamic(() => import("@/components/SubscribeForm"), {
  ssr: false,
});

export type Props = SubscribeFormProps;

export default function SubscribeScreen({
  namespaceId,
  space,
  spaceId,
}: Props): JSX.Element {
  return (
    <>
      <SeoSpace title="Subscribe" description="Subscribe to the publication" />
      <HeaderRoot />
      <ContainerRoot>
        <SubscribeHero />
        <SubscribeForm
          namespaceId={namespaceId}
          spaceId={spaceId}
          space={space}
        />
      </ContainerRoot>
    </>
  );
}
