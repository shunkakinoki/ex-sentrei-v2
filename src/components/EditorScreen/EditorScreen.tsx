import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import EditorHeader from "@/components/EditorHeader";

const EditorRich = dynamic(() => import("@/components/EditorRich"), {
  ssr: false,
});

export default function EditorScreen(): JSX.Element {
  return (
    <ContainerRoot>
      <EditorHeader />
      <div className="relative px-3 py-3 my-12 mx-9 md:mx-12 lg:mx-18">
        <EditorRich />
      </div>
    </ContainerRoot>
  );
}
