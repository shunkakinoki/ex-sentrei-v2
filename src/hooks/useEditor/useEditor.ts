import {useRecoilValue, atom} from "recoil";

export const editorTitleAtom = atom<string | undefined>({
  key: "editorTitle",
  default: undefined,
});

export const editorBodyAtom = atom<string | undefined>({
  key: "editorBody",
  default: undefined,
});

export default function useEditor(): {
  editorTitle: string | undefined;
  editorBody: string | undefined;
} {
  const editorTitle = useRecoilValue(editorTitleAtom);
  const editorBody = useRecoilValue(editorBodyAtom);

  return {
    editorTitle,
    editorBody,
  };
}
