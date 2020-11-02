import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Article from "@/types/Article";

const db = admin.firestore();

/**
 * Delete article on article delete
 */
const spaceArticleDelete = functions.firestore
  .document("articles/{articleId}")
  .onDelete(async (snap, context) => {
    const {articleId} = context.params;

    const data = snap.data() as Article.Response;

    return db
      .doc(`spaces/${data.spaceId}/articles/${articleId as string}`)
      .delete();
  });

export default spaceArticleDelete;
