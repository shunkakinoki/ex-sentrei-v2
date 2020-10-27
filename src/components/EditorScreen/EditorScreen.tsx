import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import EditorHeader from "@/components/EditorHeader";

const EditorToast = dynamic(() => import("@/components/EditorToast"), {
  ssr: false,
});

export default function EditorScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <EditorHeader />
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
