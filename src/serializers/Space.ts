/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Space from "@/types/Space";

export const serializeSpace = (
  snap: firebase.default.firestore.DocumentSnapshot<Space.Response>,
): Space.Get => {
  const data = snap.data()!;

  return {
    ...data,
    uid: snap.id,
  };
};

export const serializeAdminSpace = (
  snap: FirebaseFirestore.DocumentSnapshot<Space.Response>,
): Space.Get => {
  const data = snap.data()!;

  return {
    ...data,
    uid: snap.id,
  };
};
