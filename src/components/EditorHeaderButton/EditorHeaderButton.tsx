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
import Article from "@/types/Article";

export interface Props extends Pick<Article.Get, "status"> {
  articleId?: string;
}

export default function EditorHeaderButton({
  articleId,
  status,
}: Props): JSX.Element {
  const router = useRouter();
  const {authState} = useAuth();
  const {profile} = useProfile();
  const {
    editorBody,
    editorImage,
    editorPricing,
    editorTitle,
    editorSwitch,
  } = useEditor();

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

    toast.info(
      // eslint-disable-next-line no-nested-ternary
      editorSwitch && status === "preview"
        ? "Publishing..."
        : editorSwitch && status === "published"
        ? "Updating..."
        : "Saving...",
    );

    try {
      if (articleId === "") {
        await createArticle({
          profileIds: [authState?.uid],
          body: editorBody,
          createdAt: timestamp,
          createdBy: profile,
          createdById: authState?.uid,
          image: editorImage ?? null,
          pricing: editorPricing ?? "free",
          spaceId: authState?.uid,
          status: editorSwitch ? "published" : "preview",
          time: 3,
          title: editorTitle,
          updatedAt: timestamp,
          updatedBy: profile,
          updatedById: authState?.uid,
        })?.then(() => {
          toast.success(editorSwitch ? "Published!" : "Saved!");
          return router.push("/dashboard");
        });
      } else if (articleId) {
        await updateArticle(articleId, {
          profileIds: [authState?.uid],
          body: editorBody,
          image: editorImage ?? null,
          pricing: editorPricing ?? "free",
          status: editorSwitch ? "published" : "preview",
          title: editorTitle,
          updatedAt: timestamp,
          updatedBy: profile,
          updatedById: authState?.uid,
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
        {editorSwitch && status === "preview" && "Publish"}
        {editorSwitch && status === "published" && "Update"}
        {!editorSwitch && "Save"}
      </button>
    </span>
  );
}
