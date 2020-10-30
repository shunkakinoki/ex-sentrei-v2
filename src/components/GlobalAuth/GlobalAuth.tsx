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

  return null;
};

export default GlobalAuth;
