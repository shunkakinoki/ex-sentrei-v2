import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Space from "@/types/Space";

const db = admin.firestore();

/**
 * Decrease article count to arbitrary collection
 */
const articleCountMinus = functions.firestore
  .document("spaces/{spaceId}/articles/{articleId}")
  .onDelete((_, context) => {
    const {spaceId} = context.params;
    return db.doc(`spaces/${spaceId as string}`).update(<Space.AdminUpdate>{
      articleCount: admin.firestore.FieldValue.increment(-1),
    });
  });

export default articleCountMinus;
