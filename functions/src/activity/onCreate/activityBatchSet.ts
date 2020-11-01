/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Activity from "@/types/Activity";
import Metadata from "@/types/Metadata";

const db = admin.firestore();

/**
 * Batch set activity for spaces
 */
const activityBatchSet = functions.firestore
  .document("activity/{activityId}")
  .onCreate((snap, context) => {
    const {activityId} = context.params;
    const data = snap.data() as Activity.Response;

    const batch = db.batch();

    const updateData: Metadata.Update = {
      updatedAt: data.updatedAt,
      updatedBy: data.user,
      updatedByUid: data.createdByUid,
    };

    if (data.spaceId) {
      const spaceRef = db.doc(`spaces/${data.spaceId}`);
      const spaceActivityRef = db.doc(
        `spaces/${data.spaceId}/activity/${activityId as string}`,
      );
      batch.set(spaceRef, updateData, {merge: true});
      batch.set(spaceActivityRef, data);
    }

    const userRef = db.doc(`users/${data.userId}`);
    const userActivityRef = db.doc(
      `users/${data.userId}/activity/${activityId as string}`,
    );
    batch.set(userRef, updateData, {merge: true});
    batch.set(userActivityRef, data);

    return batch.commit();
  });

export default activityBatchSet;
