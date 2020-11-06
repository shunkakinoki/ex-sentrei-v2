/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Space from "@/types/Space";
import {serializeFirebaseDate} from "@/utils/date";

export const serializeSpace = (
  snap: firebase.default.firestore.DocumentSnapshot<Space.Response>,
): Space.Get => {
  const data = snap.data()!;

  return {
    ...data,
    articleCount: data.articleCount as number,
    createdAt: serializeFirebaseDate(data.createdAt),
    customerCount: data.customerCount as number,
    id: snap.id,
    memberCount: data.memberCount as number,
    updatedAt: serializeFirebaseDate(data.updatedAt),
  };
};

export const serializeAdminSpace = (
  snap: FirebaseFirestore.DocumentSnapshot<Space.Response>,
): Space.Get => {
  const data = snap.data()!;

  return {
    ...data,
    articleCount: data.articleCount as number,
    createdAt: serializeFirebaseDate(data.createdAt),
    customerCount: data.customerCount as number,
    id: snap.id,
    memberCount: data.memberCount as number,
    updatedAt: serializeFirebaseDate(data.updatedAt),
  };
};
