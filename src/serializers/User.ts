/* eslint-disable @typescript-eslint/no-non-null-assertion */

import User from "@/types/User";

export const serializeUser = (
  snap: firebase.default.firestore.DocumentSnapshot<User.Response>,
): User.Get => {
  const data = snap.data()!;

  return {
    ...data,
    uid: snap.id,
  };
};

export const serializeAdminUser = (
  snap: FirebaseFirestore.DocumentSnapshot<User.Response>,
): User.Get => {
  const data = snap.data()!;

  return {
    ...data,
    uid: snap.id,
  };
};
