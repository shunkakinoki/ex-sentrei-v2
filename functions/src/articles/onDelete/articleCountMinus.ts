/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Article from "@/types/Article";
import Space from "@/types/Space";

const db = admin.firestore();

/**
 * Decrease article count to arbitrary collection
 */
const articleCountMinus = functions.firestore
  .document("articles/{articleId}")
  .onDelete(snap => {
    return db.runTransaction(async transaction => {
      const data = snap.data() as Article.Response;

      const spaceRef = db.doc(`spaces/${data.spaceId}`);
      const spaceData = (
        await transaction.get(spaceRef)
      ).data() as Space.Response;

      const number = (spaceData.articleCount as number) - 1;

      transaction.update(spaceRef, {
        articleCount: number,
      });

      return db
        .collection("articles")
        .where("spaceNum", ">", data.spaceNum)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const articleData = doc.data() as Article.Response;

            const spaceNum = (articleData?.spaceNum as number) - 1;

            transaction.set(
              doc.ref,
              {
                spaceNum,
              },
              {merge: true},
            );
          });
        });
    });
  });

export default articleCountMinus;
