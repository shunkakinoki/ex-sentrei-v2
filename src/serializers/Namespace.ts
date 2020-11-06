/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Namespace from "@/types/Namespace";

// eslint-disable-next-line import/prefer-default-export
export const serializeNamespace = (
  snap: firebase.default.firestore.DocumentSnapshot<Namespace.Response>,
): Namespace.Get => {
  const data = snap.data()!;

  return {
    ...data,
    id: snap.id,
  };
};

export const serializeAdminNamespace = (
  snap: FirebaseFirestore.DocumentSnapshot<Namespace.Response>,
): Namespace.Get => {
  const data = snap.data()!;

  return {
    ...data,
    id: snap.id,
  };
};
