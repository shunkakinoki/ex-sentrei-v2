import {toast} from "react-toastify";
import {useSetRecoilState} from "recoil";
import Editor from "rich-markdown-editor";

import {editorBodyAtom} from "@/hooks/useEditor";
import Article from "@/types/Article";

export type Props = Pick<Article.Fields, "body">;

export default function EditorRich({body}: Props): JSX.Element {
  const setBodyState = useSetRecoilState(editorBodyAtom);

  return (
    <Editor
      defaultValue={body}
      onChange={text => setBodyState(text)}
      onShowToast={message => toast(message)}
    />
  );
}
