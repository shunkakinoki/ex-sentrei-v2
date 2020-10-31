import {useState} from "react";
import {toast} from "react-toastify";
import Editor from "rich-markdown-editor";

import Article from "@/types/Article";

export type Props = Pick<Article.Fields, "body">;

export default function EditorRich({body}: Props): JSX.Element {
  const [, setValue] = useState<string>(body);

  return (
    <Editor
      defaultValue={body}
      onChange={text => setValue(text)}
      onShowToast={message => toast(message)}
    />
  );
}
