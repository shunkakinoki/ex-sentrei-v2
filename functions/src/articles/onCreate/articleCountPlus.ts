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
    const data = snap.data() as Article.Response;

    return db.doc(`spaces/${data.spaceId}`).update(<Space.AdminUpdate>{
      articleCount: admin.firestore.FieldValue.increment(1),
    });
  });

export default articleCountPlus;
