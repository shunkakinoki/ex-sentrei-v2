/* eslint-disable @typescript-eslint/restrict-template-expressions */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Actions from "@/types/Actions";
import Activity from "@/types/Activity";

const db = admin.firestore();

/**
 * Add actions on activity
 */
const actionsBatchSet = functions.firestore
  .document("activity/{activityId}")
  .onCreate(snap => {
    const data = snap.data() as Activity.Response;

    const actions = `${data.action}_${data.category}`;
    const actionsData: Actions.Fields = {
      [actions]: admin.firestore.FieldValue.increment(1),
    };

    const batch = db.batch();

    const actionsRef = db.doc(`users/${data.createdByUid}/admin/actions`);
    const spaceRef = db.doc(`spaces/${data.spaceId}/admin/actions`);

    batch.set(actionsRef, actionsData, {merge: true});
    batch.set(spaceRef, actionsData, {
      merge: true,
    });

    return batch.commit();
  });

export default actionsBatchSet;
