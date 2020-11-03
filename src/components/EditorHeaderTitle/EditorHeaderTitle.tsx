import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useSetRecoilState} from "recoil";

import useArticle from "@/hooks/useArticle";
import {editorTitleAtom} from "@/hooks/useEditor";
import Article from "@/types/Article";

export interface Props extends Partial<Pick<Article.Get, "uid" | "title">> {
  namespaceId: string;
}

export default function EditorHeaderTitle({
  uid,
  title,
  namespaceId,
}: Props): JSX.Element {
  const {article} = useArticle(namespaceId, uid);

  const setTitleState = useSetRecoilState(editorTitleAtom);

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {register, reset, formState, watch} = useForm<
    Partial<Pick<Article.Get, "uid" | "title">>
  >({
    defaultValues: {
      title,
    },
  });

  const titleValue = watch("title");

  useEffect(() => {
    setTitleState(titleValue);
  }, [setTitleState, titleValue]);

  useEffect(() => {
    if (article && !formState.isDirty) {
      reset({
        title: article?.title,
      });
    }
  }, [reset, article, formState.isDirty]);

  return (
    <form className="mx-auto" action="#" method="POST">
      <div className="flex items-center border-b border-pink-500">
        <input
          ref={register}
          name="title"
          className="w-full px-2 py-3 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          type="text"
          placeholder="Write article title..."
          aria-label="Article title"
        />
      </div>
    </form>
  );
}
