import Router from "next/router";
import {useEffect, useMemo} from "react";
import {useRecoilValue, atom} from "recoil";

export const authStateAtom = atom<firebase.default.User | null | undefined>({
  default: undefined,
  key: "auth",
});

export const authInitializedAtom = atom<boolean | undefined>({
  default: undefined,
  key: "authInitialized",
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

  useEffect(() => {
    if (
      (Router.pathname === "/profile" ||
        Router.pathname === "/settings" ||
        Router.pathname.startsWith("/dashboard")) &&
      isAuthInitialized &&
      !isLoggedIn
    ) {
      // eslint-disable-next-line no-void
      void Router.replace("/login");
    }
  }, [isAuthInitialized, isLoggedIn]);

  return {
    authState,
    isLoggedIn,
  };
}
