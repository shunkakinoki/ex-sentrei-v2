import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Article from "@/types/Article";

const db = admin.firestore();

/**
 * Update articles on spaces
 */
const spaceArticleUpdate = functions.firestore
  .document("articles/{articleId}")
  .onUpdate(async change => {
    const {id} = change.after;
    const after = change.after.data() as Article.Response;

    return db.doc(`spaces/${after.spaceId}/articles/${id}`).update(after);
  });

export default spaceArticleUpdate;
