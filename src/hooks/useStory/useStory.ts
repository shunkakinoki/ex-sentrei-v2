import {useRecoilValue, atom} from "recoil";

export const storySwitchAtom = atom<boolean>({
  default: false,
  key: "storySwitch",
});

export default function useStory(): {
  storySwitch: boolean;
} {
  const storySwitch = useRecoilValue(storySwitchAtom);

  return {
    storySwitch,
  };
}
