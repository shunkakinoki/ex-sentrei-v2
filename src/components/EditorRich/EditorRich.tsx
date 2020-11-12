import {useEffect} from "react";
import {toast} from "react-toastify";
import {useSetRecoilState} from "recoil";
import Editor from "rich-markdown-editor";

import useEditor, {editorBodyAtom} from "@/hooks/useEditor";
import Markdown from "@/styles/markdown.module.css";
import Article from "@/types/Article";
import {getImageUrl} from "@/utils/image";

export type Props = Pick<Article.Get, "body">;
export default function EditorRich({body}: Props): JSX.Element {
  const setEditorBody = useSetRecoilState(editorBodyAtom);
  const {editorBody} = useEditor();
  useEffect(() => {
    setEditorBody(body);
  }, [setEditorBody, body]);

  const onUnload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    toast.error("You have unsaved changes!");
  };

  const handleImage = async (file: File): Promise<string> => {
    const imageUrl = await getImageUrl(file);
    return imageUrl;
  };

  useEffect(() => {
    if (body && !(body === editorBody)) {
      window.addEventListener("beforeunload", onUnload);
    } else {
      window.removeEventListener("beforeunload", onUnload);
    }

    return () => window.removeEventListener("beforeunload", onUnload);
  });

  return (
    <div className={Markdown.markdown}>
      <Editor
        defaultValue={body}
        uploadImage={handleImage}
        onChange={text => setEditorBody(text)}
        onShowToast={message => toast(message)}
      />
    </div>
  );
}
