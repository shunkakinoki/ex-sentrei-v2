import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";

const PapercupsWindow = dynamic(() => import("@/components/PapercupsWindow"), {
  ssr: false,
});

export default function SupportScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <PapercupsWindow />
    </ContainerRoot>
  );
}
