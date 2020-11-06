import clsx from "clsx";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {toast} from "react-toastify";
import {useSetRecoilState} from "recoil";

import {timestamp} from "@/firebase/db";
import useAuth from "@/hooks/useAuth";
import useEditor, {editorArticleIdAtom} from "@/hooks/useEditor";
import useProfile from "@/hooks/useProfile";
import {createArticle, updateArticle} from "@/services/Article";

export interface Props {
  articleId?: string;
}

export default function EditorHeaderButton({articleId}: Props): JSX.Element {
  const router = useRouter();
  const {authState} = useAuth();
  const {profile} = useProfile();
  const {editorBody, editorTitle, editorSwitch} = useEditor();

  const setEditorArticleId = useSetRecoilState(editorArticleIdAtom);

  useEffect(() => {
    setEditorArticleId(articleId);
  }, [setEditorArticleId, articleId]);

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

    toast.info(editorSwitch ? "Publishing..." : "Saving...");

    try {
      if (articleId === "") {
        await createArticle({
          authorUids: [authState?.uid],
          body: editorBody,
          createdAt: timestamp,
          createdBy: profile,
          createdByUid: authState?.uid,
          pricing: "free",
          spaceId: authState?.uid,
          status: editorSwitch ? "published" : "preview",
          time: 3,
          title: editorTitle,
          updatedAt: timestamp,
          updatedBy: profile,
          updatedByUid: authState?.uid,
        })?.then(() => {
          toast.success(editorSwitch ? "Published!" : "Saved!");
          return router.push("/dashboard");
        });
      } else if (articleId) {
        await updateArticle(articleId, {
          authorUids: [authState?.uid],
          body: editorBody,
          pricing: "free",
          status: editorSwitch ? "published" : "preview",
          title: editorTitle,
          updatedAt: timestamp,
          updatedBy: profile,
          updatedByUid: authState?.uid,
        })?.then(() => {
          toast.success(editorSwitch ? "Updated!" : "Saved!");
          return router.push("/dashboard");
        });
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      toast.error("Error");
    }
  };

  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        type="submit"
        className={clsx(
          "inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out rounded-md focus:outline-none focus:border-pink-800 focus:shadow-outline-pink active:bg-pink-700",
          editorSwitch &&
            "text-white bg-pink-400 border border-transparent hover:bg-pink-500 ",
          !editorSwitch &&
            "text-pink-400 bg-white border hover:bg-pink-50 border-pink-300",
        )}
        onClick={handleClick}
      >
        {editorSwitch && "Publish"}
        {!editorSwitch && "Save"}
      </button>
    </span>
  );
}
