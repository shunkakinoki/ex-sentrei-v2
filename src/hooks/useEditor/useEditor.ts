import {useRecoilValue, atom} from "recoil";

export const editorArticleIdAtom = atom<string | undefined>({
  default: undefined,
  key: "editorArticleId",
});

export const editorBodyAtom = atom<string | undefined>({
  default: undefined,
  key: "editorBody",
});

export const editorDeleteAtom = atom<boolean>({
  default: false,
  key: "editorDelete",
});

export const editorImageAtom = atom<string | undefined>({
  default: undefined,
  key: "editorImage",
});

export const editorPricingAtom = atom<
  "free" | "paid" | "subscription" | undefined
>({
  default: undefined,
  key: "editorPricing",
});

export const editorSwitchAtom = atom<boolean>({
  default: false,
  key: "editorSwitch",
});

export const editorSubtitleAtom = atom<string | undefined>({
  default: undefined,
  key: "editorSubtitle",
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
  editorDelete: boolean;
  editorImage: string | undefined;
  editorPricing: "free" | "paid" | "subscription" | undefined;
  editorSubtitle: string | undefined;
  editorSwitch: boolean;
  editorTitle: string | undefined;
  editorToolkit: boolean;
} {
  const editorArticleId = useRecoilValue(editorArticleIdAtom);
  const editorBody = useRecoilValue(editorBodyAtom);
  const editorDelete = useRecoilValue(editorDeleteAtom);
  const editorImage = useRecoilValue(editorImageAtom);
  const editorPricing = useRecoilValue(editorPricingAtom);
  const editorSubtitle = useRecoilValue(editorSubtitleAtom);
  const editorSwitch = useRecoilValue(editorSwitchAtom);
  const editorTitle = useRecoilValue(editorTitleAtom);
  const editorToolkit = useRecoilValue(editorToolkitAtom);

  return {
    editorArticleId,
    editorBody,
    editorDelete,
    editorImage,
    editorPricing,
    editorSubtitle,
    editorSwitch,
    editorTitle,
    editorToolkit,
  };
}
