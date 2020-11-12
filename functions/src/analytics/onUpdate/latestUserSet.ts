/* eslint-disable @typescript-eslint/restrict-template-expressions */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import setLatestAnalytics from "../../helpers/analytics/setLatestAnalytics";

const db = admin.firestore();

/**
 * Set latest users on update
 */
const latestUserSet = functions.firestore
  .document("users/{userId}/admin/{adminId}")
  .onUpdate(async (change, context) => {
    const {userId, adminId} = context.params;

    const analyticsData = setLatestAnalytics(adminId, "user", change);

    if (!analyticsData) {
      return false;
    }

    return db
      .doc(`users/${userId}/analytics/latest`)
      .set(analyticsData, {merge: true});
  });

export default latestUserSet;
