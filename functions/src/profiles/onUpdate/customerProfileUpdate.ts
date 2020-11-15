import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import Profile from "@/types/Profile";
import {isEqual} from "lodash";

const db = admin.firestore();

/**
 * Update profile of customer
 */
const customerProfileUpdate = functions.firestore
  .document("profiles/{profileId}")
  .onUpdate(async (change, context) => {
    const {profileId} = context.params;

    const before = change.before.data() as Profile.Response;
    const after = change.after.data() as Profile.Response;
    const noChanges = isEqual(before, after);

    if (!noChanges) {
      return false;
    }

    return db.doc(`customers/${profileId as string}`).update(after);
  });

export default customerProfileUpdate;
