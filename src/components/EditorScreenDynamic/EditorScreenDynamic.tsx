import {useEffect} from "react";
import {useSetRecoilState} from "recoil";

import useArticle from "@/hooks/useArticle";
import {
  editorBodyAtom,
  editorSwitchAtom,
  editorTitleAtom,
} from "@/hooks/useEditor";
import Article from "@/types/Article";

export interface Props {
  article?: Article.Get;
  articleId?: string;
  namespaceId: string;
}

export default function EditorScreenDynamic({
  article,
  articleId,
  namespaceId,
}: Props): null {
  useArticle(namespaceId, articleId, article);

  const setBodySwitch = useSetRecoilState(editorBodyAtom);
  const setEditorSwitch = useSetRecoilState(editorSwitchAtom);
  const setEditorTitle = useSetRecoilState(editorTitleAtom);

  useEffect(() => {
    setBodySwitch(article?.body);
  }, [setBodySwitch, article?.body]);

  useEffect(() => {
    setEditorSwitch(article?.status === "published");
  }, [setEditorSwitch, article?.status]);

  useEffect(() => {
    setEditorTitle(article?.title);
  }, [setEditorTitle, article?.title]);

  return null;
}
