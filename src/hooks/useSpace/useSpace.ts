import useSWR from "swr";

import useAuth from "@/hooks/useAuth";
import {getSpace} from "@/services/Space";
import Space from "@/types/Space";

const getSpaceFetcher = async (spaceId: string) => {
  const uid = spaceId.replace("spaces/", "");
  return getSpace(uid);
};

export default function useSpace(
  namespaceId: string,
): {
  space: Space.Get | null | undefined;
} {
  const {authState} = useAuth();

  const {data: space} = useSWR(
    // eslint-disable-next-line no-nested-ternary
    namespaceId === "demo"
      ? null
      : authState?.uid
      ? `spaces/${authState.uid}`
      : null,
    getSpaceFetcher,
  );

  return {space};
}
