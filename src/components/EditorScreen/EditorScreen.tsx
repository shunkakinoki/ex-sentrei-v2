import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import EditorHeader from "@/components/EditorHeader";
import useArticle from "@/hooks/useArticle";
import Article from "@/types/Article";

const EditorRich = dynamic(() => import("@/components/EditorRich"), {
  ssr: false,
});

export interface Props {
  article?: Article.Get;
  articleId?: string;
  namespaceId: string;
}

export default function EditorScreen({
  article,
  articleId,
  namespaceId,
}: Props): JSX.Element {
  const {article: swrArticle} = useArticle(namespaceId, articleId, article);

  return (
    <ContainerRoot>
      <EditorHeader
        uid={swrArticle?.uid}
        title={swrArticle?.title}
        namespaceId={namespaceId}
      />
      <div className="relative px-3 py-3 my-12 mx-9 md:mx-12 lg:mx-18">
        <EditorRich body={swrArticle?.body ?? ""} />
      </div>
    </ContainerRoot>
  );
}
