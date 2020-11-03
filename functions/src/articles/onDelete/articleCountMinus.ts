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
    const data = snap.data() as Article.Response;

    return db.doc(`spaces/${data.spaceId}`).update(<Space.AdminUpdate>{
      articleCount: admin.firestore.FieldValue.increment(-1),
    });
  });

export default articleCountMinus;
