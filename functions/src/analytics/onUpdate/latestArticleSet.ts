/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import setLatestAnalytics from "../../helpers/analytics/setLatestAnalytics";

const db = admin.firestore();

/**
 * Set latest rooms on update
 */
const latestRoomSet = functions.firestore
  .document("spaces/{spaceId}/article/{articleId}/admin/{adminId}")
  .onUpdate(async (change, context) => {
    const {spaceId, articleId, adminId} = context.params;

    const analyticsData = setLatestAnalytics(adminId, "article", change);

    if (!analyticsData) {
      return false;
    }

    return db
      .doc(`spaces/${spaceId}/articles/${articleId}/analytics/latest`)
      .set(analyticsData, {merge: true});
  });

export default latestRoomSet;
