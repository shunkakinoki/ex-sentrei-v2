import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import EditorHeader from "@/components/EditorHeader";

const EditorRich = dynamic(() => import("@/components/EditorRich"), {
  ssr: false,
});

export interface Props {
  namespaceId: string;
}

export default function EditorScreen({namespaceId}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <EditorHeader namespaceId={namespaceId} />
      <div className="relative px-3 py-3 my-12 mx-9 md:mx-12 lg:mx-18">
        <EditorRich />
      </div>
    </ContainerRoot>
  );
}
