import clsx from "clsx";
import {toast} from "react-toastify";
import {useRecoilValue, useResetRecoilState} from "recoil";

import {timestamp} from "@/firebase/db";
import useAuth from "@/hooks/useAuth";
import {editorTitleAtom, editorBodyAtom} from "@/hooks/useEditor";
import useProfile from "@/hooks/useProfile";
import {createArticle} from "@/services/Article";

export interface Props {
  switchValue: boolean;
}

export default function EditorHeaderButton({switchValue}: Props): JSX.Element {
  const {authState} = useAuth();

  const {profile} = useProfile();

  const editorTitle = useRecoilValue(editorTitleAtom);
  const editorBody = useRecoilValue(editorBodyAtom);
  const resetEditorTitle = useResetRecoilState(editorTitleAtom);
  const resetEditorBody = useResetRecoilState(editorBodyAtom);

  const handleClick = async (): Promise<void> => {
    if (!profile || !authState?.uid) {
      return;
    }
    if (editorBody === undefined || editorBody === "") {
      toast.error("Please write body!");
      return;
    }
    if (editorTitle === undefined || editorTitle === "") {
      toast.error("Please write title!");
      return;
    }
    toast.info("Publishing...");

    try {
      await createArticle({
        authors: [],
        body: editorBody,
        createdAt: timestamp,
        createdBy: profile,
        createdByUid: authState?.uid,
        pricing: "free",
        nameslugId: "",
        status: "published",
        time: 3,
        title: editorTitle,
        updatedAt: timestamp,
        updatedBy: profile,
        updatedByUid: authState?.uid,
      })?.then(() => {
        toast.success("Published!");
        resetEditorBody();
        resetEditorTitle();
      });
    } catch (err) {
      toast.error("Error");
    }
  };

  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        onClick={handleClick}
        type="submit"
        className={clsx(
          "inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out rounded-md focus:outline-none focus:border-pink-800 focus:shadow-outline-pink active:bg-pink-700",
          switchValue &&
            "text-white bg-pink-400 border border-transparent hover:bg-pink-500 ",
          !switchValue &&
            "text-pink-400 bg-white border hover:bg-pink-50 border-pink-300",
        )}
      >
        {switchValue && "Publish"}
        {!switchValue && "Save"}
      </button>
    </span>
  );
}
