/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import Metrics from "@/types/Metrics";

const db = admin.firestore();

/**
 * Increase article view
 */
export const articleViewPlus = functions.https.onCall(async data => {
  const {articleId} = data;
  if (!articleId) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "articleId is required!",
    );
  }

  const actionsData: Metrics.Fields = {
    view: admin.firestore.FieldValue.increment(1),
  };

  return db
    .doc(`articles/${articleId}/admin/metrics`)
    .set(actionsData, {merge: true});
});

export default articleViewPlus;
