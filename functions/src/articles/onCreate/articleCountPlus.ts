import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Space from "@/types/Space";
import Article from "@/types/Article";

const db = admin.firestore();

/**
 * Increase article count to arbitrary collection
 */
const articleCountPlus = functions.firestore
  .document("articles/{articleId}")
  .onCreate(snap => {
    return db.runTransaction(async transaction => {
      const data = snap.data() as Article.Response;

      const spaceRef = db.doc(`spaces/${data.spaceId}`);
      const spaceData = (
        await transaction.get(spaceRef)
      ).data() as Space.Response;

      const number = (spaceData.articleCount as number) + 1;

      transaction.update(spaceRef, {
        articleCount: number,
      });

      const customerRef = snap.ref;

      transaction.set(
        customerRef,
        {
          spaceNum: number,
        },
        {merge: true},
      );
    });
  });

export default articleCountPlus;
