import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import EditorHeader from "@/components/EditorHeader";
import Article from "@/types/Article";

const EditorRich = dynamic(() => import("@/components/EditorRich"), {
  ssr: false,
});

export interface Props {
  article?: Article.Get;
  namespaceId: string;
}

export default function EditorScreen({
  article,
  namespaceId,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <EditorHeader
        uid={article?.uid}
        title={article?.title}
        namespaceId={namespaceId}
      />
      <div className="relative px-3 py-3 my-12 mx-9 md:mx-12 lg:mx-18">
        <EditorRich body={article?.body ?? ""} />
      </div>
    </ContainerRoot>
  );
}
