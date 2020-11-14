import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SeoSpace from "@/components/SeoSpace";
import SubscribeHero from "@/components/SubscribeHero";

const SubscribeForm = dynamic(() => import("@/components/SubscribeForm"), {
  ssr: false,
});

export default function SubscribeScreen(): JSX.Element {
  return (
    <>
      <SeoSpace title="Subscribe" description="Subscribe to the publication" />
      <HeaderRoot />
      <ContainerRoot>
        <SubscribeHero />
        <SubscribeForm />
      </ContainerRoot>
    </>
  );
}
