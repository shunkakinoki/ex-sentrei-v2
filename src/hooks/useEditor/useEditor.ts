import {useRecoilValue, atom} from "recoil";

export const editorBodyAtom = atom<string | undefined>({
  key: "editorBody",
  default: undefined,
});

export const editorSwitchAtom = atom<boolean>({
  key: "editorSwitch",
  default: false,
});

export const editorTitleAtom = atom<string | undefined>({
  key: "editorTitle",
  default: undefined,
});

export default function useEditor(): {
  editorBody: string | undefined;
  editorSwitch: boolean;
  editorTitle: string | undefined;
} {
  const editorBody = useRecoilValue(editorBodyAtom);
  const editorSwitch = useRecoilValue(editorSwitchAtom);
  const editorTitle = useRecoilValue(editorTitleAtom);

  return {
    editorBody,
    editorSwitch,
    editorTitle,
  };
}
