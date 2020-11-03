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
    if (isAuthInitialized === undefined) {
      return;
    }
    if (Router.pathname === "/demo" || Router.pathname.startsWith("/demo/")) {
      return;
    }
    if (
      Router.pathname === "/" ||
      Router.pathname === "/home" ||
      Router.pathname === "/landing" ||
      Router.pathname === "/login" ||
      Router.pathname === "/pricing" ||
      Router.pathname === "/profile" ||
      Router.pathname === "/reset-password" ||
      Router.pathname === "/signup" ||
      Router.pathname === "/settings" ||
      Router.pathname === "/support"
    ) {
      return;
    }
    if (!isLoggedIn) {
      // eslint-disable-next-line no-void
      void Router.replace("/login");
    }
  }, [isAuthInitialized, isLoggedIn]);

  return {
    authState,
    isLoggedIn,
  };
}
