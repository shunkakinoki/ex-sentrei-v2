import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";

const EditorToast = dynamic(() => import("@/components/EditorToast"), {
  ssr: false,
});

export default function EditorScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <div className="relative py-12 overflow-hidden md:py-24">
        <div className="flex justify-center ">
          <div className="shadow-xl">
            <EditorToast />
          </div>
        </div>
      </div>
    </ContainerRoot>
  );
}
