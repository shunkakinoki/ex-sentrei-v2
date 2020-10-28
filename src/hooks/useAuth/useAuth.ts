import {useEffect} from "react";
import {useRecoilState, atom} from "recoil";

import auth from "@/firebase/auth";
import {getUserLive} from "@/services/User";
import Profile from "@/types/Profile";
import User from "@/types/User";

const profileAtom = atom<Profile.Get | null>({
  key: "profile",
  default: null,
});

const userAtom = atom<User.Get | null | undefined>({
  key: "user",
  default: undefined,
});

const authStateAtom = atom<firebase.default.User | null | undefined>({
  key: "auth",
  default: undefined,
});

export default function useAuth(): {
  user: User.Get | null | undefined;
  profile: Profile.Get | null;
} {
  const [profile, setProfile] = useRecoilState(profileAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const [authState, setAuthState] = useRecoilState(authStateAtom);

  useEffect(() => {
    auth.onAuthStateChanged(setAuthState);
  });

  useEffect(() => {
    let unsubscribe: firebase.default.Unsubscribe = () => {};

    if (authState) {
      unsubscribe = getUserLive(authState.uid, snap => {
        setUser(snap);
      });
    }

    if (authState === null) {
      setUser(null);
    }

    return (): void => {
      unsubscribe();
    };
  }, [authState, setUser]);

  useEffect(() => {
    if (!user) {
      setProfile(null);
    }
  }, [user, setProfile]);

  return {user, profile};
}
