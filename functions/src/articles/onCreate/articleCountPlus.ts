import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Space from "@/types/Space";

const db = admin.firestore();

/**
 * Increase article count to arbitrary collection
 */
const articleCountPlus = functions.firestore
  .document("spaces/{spaceId}/articles/{articleId}")
  .onCreate((_, context) => {
    const {spaceId} = context.params;
    return db.doc(`spaces/${spaceId}`).update(<Space.AdminUpdate>{
      articleCount: admin.firestore.FieldValue.increment(1),
    });
  });

export default articleCountPlus;
