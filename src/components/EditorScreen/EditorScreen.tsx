import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import EditorHeader from "@/components/EditorHeader";
import {Props as EditorScreenDynamicProps} from "@/components/EditorScreenDynamic";

const EditorRich = dynamic(() => import("@/components/EditorRich"), {
  ssr: false,
});

const EditorScreenDynamic = dynamic(
  () => import("@/components/EditorScreenDynamic"),
  {
    ssr: false,
  },
);

export type Props = EditorScreenDynamicProps;

export default function EditorScreen({
  article,
  articleId,
  namespaceId,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <EditorScreenDynamic
        article={article}
        articleId={articleId}
        namespaceId={namespaceId}
      />
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
