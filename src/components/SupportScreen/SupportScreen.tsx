import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SeoLanding from "@/components/SeoLanding";

const PapercupsWindow = dynamic(() => import("@/components/PapercupsWindow"), {
  ssr: false,
});

export default function SupportScreen(): JSX.Element {
  return (
    <>
      <SeoLanding title="Support" />
      <HeaderRoot />
      <ContainerRoot>
        <PapercupsWindow />
      </ContainerRoot>
    </>
  );
}
