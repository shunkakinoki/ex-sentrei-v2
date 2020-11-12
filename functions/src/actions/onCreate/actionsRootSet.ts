import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Actions from "@/types/Actions";
import Activity from "@/types/Activity";

const db = admin.firestore();

/**
 * Add actions on activity
 */
const actionsRootSet = functions.firestore
  .document("activity/{activityId}")
  .onCreate(snap => {
    const data = snap.data() as Activity.Response;
    const actions = `${data.action}_${data.category}`;
    const actionsData: Actions.Fields = {
      [actions]: admin.firestore.FieldValue.increment(1),
    };

    return db.doc("admin/actions").set(actionsData, {merge: true});
  });

export default actionsRootSet;
