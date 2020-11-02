import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Article from "@/types/Article";

const db = admin.firestore();

/**
 * Set space on article create
 */
const spaceArticleSet = functions.firestore
  .document("articles/{articleId}")
  .onCreate(async (snap, context) => {
    const {articleId} = context.params;

    const data = snap.data() as Article.Response;

    return db
      .doc(`spaces/${data.spaceId}/articles/${articleId as string}`)
      .set(data);
  });

export default spaceArticleSet;
