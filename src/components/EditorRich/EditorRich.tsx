import {useEffect} from "react";
import {toast} from "react-toastify";
import {useSetRecoilState} from "recoil";
import Editor from "rich-markdown-editor";

import {editorBodyAtom} from "@/hooks/useEditor";
import Article from "@/types/Article";

export type Props = Pick<Article.Get, "body">;

export default function EditorRich({body}: Props): JSX.Element {
  const setEditorBody = useSetRecoilState(editorBodyAtom);

  useEffect(() => {
    setEditorBody(body);
  }, [setEditorBody, body]);

  return (
    <Editor
      defaultValue={body}
      onChange={text => setEditorBody(text)}
      onShowToast={message => toast(message)}
    />
  );
}
