import useSWR from "swr";

import useAuth from "@/hooks/useAuth";
import {getProfile} from "@/services/Profile";
import Profile from "@/types/Profile";

const getProfileFetcher = async (profileId: string) => {
  const uid = profileId.replace("profiles/", "");
  return getProfile(uid);
};

export default function useProfile(): {
  profile: Profile.Get | null | undefined;
} {
  const {authState} = useAuth();

  const {data: profile} = useSWR(
    authState?.uid ? `profiles/${authState.uid}` : null,
    getProfileFetcher,
  );
  return {profile};
}
