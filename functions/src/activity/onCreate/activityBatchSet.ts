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
  .onCreate(snap => {
    const data = snap.data() as Activity.Response;

    const batch = db.batch();

    const updateData: Metadata.Update = {
      updatedAt: data.updatedAt,
      updatedBy: data.user,
      updatedByUid: data.createdByUid,
    };

    if (data.spaceId) {
      const spaceRef = db.doc(`spaces/${data.spaceId}`);
      batch.set(spaceRef, updateData, {merge: true});
    }

    const userRef = db.doc(`users/${data.userId}`);
    batch.set(userRef, updateData, {merge: true});

    return batch.commit();
  });

export default activityBatchSet;
