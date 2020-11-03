import {useMemo} from "react";
import {useRecoilValue, atom} from "recoil";

export const authStateAtom = atom<firebase.default.User | null | undefined>({
  key: "auth",
  default: undefined,
});

export const authInitializedAtom = atom<boolean | undefined>({
  key: "authInitialized",
  default: undefined,
});

export default function useAuth(): {
  authState: firebase.default.User | null | undefined;
  isLoggedIn: boolean | undefined;
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
