/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Profile from "@/types/Profile";

export const serializeProfile = (
  snap: firebase.default.firestore.DocumentSnapshot<Profile.Response>,
): Profile.Get => {
  const data = snap.data()!;

  return {
    ...data,
    uid: snap.id,
  };
};

export const serializeAdminProfile = (
  snap: FirebaseFirestore.DocumentSnapshot<Profile.Response>,
): Profile.Get => {
  const data = snap.data()!;

  return {
    ...data,
    uid: snap.id,
  };
};
