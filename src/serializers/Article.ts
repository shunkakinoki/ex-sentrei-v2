/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Article from "@/types/Article";
import {serializeFirebaseDate} from "@/utils/date";

export const serializeArticle = (
  snap: firebase.default.firestore.DocumentSnapshot<Article.Response>,
): Article.Get => {
  const data = snap.data()!;

  return {
    ...data,
    createdAt: serializeFirebaseDate(data.createdAt),
    uid: snap.id,
    updatedAt: serializeFirebaseDate(data.updatedAt),
  };
};

export const serializeAdminArticle = (
  snap: FirebaseFirestore.DocumentSnapshot<Article.Response>,
): Article.Get => {
  const data = snap.data()!;

  return {
    ...data,
    createdAt: serializeFirebaseDate(data.createdAt),
    uid: snap.id,
    updatedAt: serializeFirebaseDate(data.updatedAt),
  };
};
