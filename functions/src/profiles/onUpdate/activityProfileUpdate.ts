/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import {isEqual, pick} from "lodash";

import Activity from "@/types/Activity";
import Profile from "@/types/Profile";

const db = admin.firestore();
const timestamp = admin.firestore.Timestamp.now();

/**
 * Create profile activity on update
 */
const activityProfileUpdate = functions.firestore
  .document("profiles/{profileId}")
  .onUpdate(async (change, context) => {
    const {profileId} = context.params;

    const before = change.before.data() as Profile.Response;
    const after = change.after.data() as Profile.Response;
    const fieldsToTrack = ["description", "name", "photo"];
    const beforeChanges = pick(before, fieldsToTrack);
    const afterChanges = pick(after, fieldsToTrack);
    const noChanges = isEqual(beforeChanges, afterChanges);

    if (noChanges) {
      return false;
    }

    const activity: Activity.UpdateProfile = {
      action: "updated",
      after,
      before,
      category: "profiles",
      categoryId: profileId,
      createdById: profileId,
      fullItemPath: `profiles/${profileId as string}`,
      itemPath: `profiles/${profileId as string}`,
      updatedAt: timestamp,
      user: after,
      userId: profileId,
      userNotification: [],
    };

    return db.collection("activity").add(activity);
  });

export default activityProfileUpdate;
