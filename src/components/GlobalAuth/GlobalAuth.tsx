import nookies from "nookies";
import {useEffect} from "react";
import {useSetRecoilState} from "recoil";

import auth from "@/firebase/auth";
import {authStateAtom, authInitializedAtom} from "@/hooks/useAuth";

const GlobalAuth = (): null => {
  const setAuthState = useSetRecoilState(authStateAtom);
  const setAuthInitializedState = useSetRecoilState(authInitializedAtom);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setAuthState(JSON.parse(JSON.stringify(user)));
      setAuthInitializedState(true);
    });
  }, [setAuthState, setAuthInitializedState]);

  useEffect(() => {
    return auth.onIdTokenChanged(async user => {
      if (!user) {
        nookies.set(undefined, "token", "", {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        return;
      }

      const token = await user.getIdToken();
      nookies.set(undefined, "token", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    });
  }, []);

  return null;
};

export default GlobalAuth;
