import {useState} from "react";
import {toast} from "react-toastify";
import Editor from "rich-markdown-editor";

export default function EditorRich(): JSX.Element {
  const [, setValue] = useState<string>("");

  return (
    <Editor
      onChange={text => setValue(text)}
      onShowToast={message => toast(message)}
    />
  );
}
