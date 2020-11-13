import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import EditorHeader, {
  Props as EditorHeaderProps,
} from "@/components/EditorHeader";
import SeoApp from "@/components/SeoApp";
import Article from "@/types/Article";

const EditorRich = dynamic(() => import("@/components/EditorRich"), {
  ssr: false,
});

const EditorToolkit = dynamic(() => import("@/components/EditorToolkit"), {
  ssr: false,
});

export interface Props extends Pick<EditorHeaderProps, "articleId"> {
  article?: Article.Get;
  namespaceId: string;
}

export default function EditorScreen({
  article,
  articleId,
  namespaceId,
}: Props): JSX.Element {
  return (
    <>
      <SeoApp title="Editor" />
      <ContainerRoot>
        <EditorHeader
          articleId={articleId}
          status={article?.status ?? "preview"}
          title={article?.title ?? ""}
          namespaceId={namespaceId}
        />
        <div className="relative px-3 py-3 my-12 mx-9 md:mx-12 lg:mx-18">
          <EditorRich body={article?.body ?? ""} />
        </div>
        <EditorToolkit image={article?.image} />
      </ContainerRoot>
    </>
  );
}
