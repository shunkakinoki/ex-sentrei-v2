import {useMemo} from "react";
import {useRecoilValue, atom} from "recoil";

import Profile from "@/types/Profile";
import User from "@/types/User";

export const profileAtom = atom<Profile.Get | null>({
  key: "profile",
  default: null,
});

export const userAtom = atom<User.Get | null | undefined>({
  key: "user",
  default: undefined,
});

export const authStateAtom = atom<firebase.default.User | null | undefined>({
  key: "auth",
  default: undefined,
});

export const authInitializedAtom = atom<boolean | undefined>({
  key: "authInitialized",
  default: undefined,
});

export default function useAuth(): {
  isLoggedIn: boolean | undefined;
  authState: firebase.default.User | null | undefined;
} {
  const authState = useRecoilValue(authStateAtom);
  const isAuthInitialized = useRecoilValue(authInitializedAtom);
  const isLoggedIn = useMemo(
    () => (isAuthInitialized === undefined ? undefined : !!authState),
    [authState, isAuthInitialized],
  );

  return {
    isLoggedIn,
    authState,
  };
}
