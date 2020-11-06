import {useRecoilValue, atom} from "recoil";

export const editorArticleIdAtom = atom<string | undefined>({
  default: undefined,
  key: "editorArticleId",
});

export const editorBodyAtom = atom<string | undefined>({
  default: undefined,
  key: "editorBody",
});

export const editorSwitchAtom = atom<boolean>({
  default: false,
  key: "editorSwitch",
});

export const editorTitleAtom = atom<string | undefined>({
  default: undefined,
  key: "editorTitle",
});

export const editorToolkitAtom = atom<boolean>({
  default: false,
  key: "editorToolkit",
});

export default function useEditor(): {
  editorArticleId: string | undefined;
  editorBody: string | undefined;
  editorSwitch: boolean;
  editorTitle: string | undefined;
  editorToolkit: boolean;
} {
  const editorArticleId = useRecoilValue(editorArticleIdAtom);
  const editorBody = useRecoilValue(editorBodyAtom);
  const editorSwitch = useRecoilValue(editorSwitchAtom);
  const editorTitle = useRecoilValue(editorTitleAtom);
  const editorToolkit = useRecoilValue(editorToolkitAtom);

  return {
    editorArticleId,
    editorBody,
    editorSwitch,
    editorTitle,
    editorToolkit,
  };
}
