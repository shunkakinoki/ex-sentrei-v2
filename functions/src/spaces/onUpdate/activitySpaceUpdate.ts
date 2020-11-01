/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import {isEqual, pick} from "lodash";

import Activity from "@/types/Activity";
import Space from "@/types/Space";

const db = admin.firestore();

/**
 * Create space activity on update
 */
const activitySpaceUpdate = functions.firestore
  .document("spaces/{spaceId}")
  .onUpdate(async (change, context) => {
    const {spaceId} = context.params;

    const before = change.before.data() as Space.Response;
    const after = change.after.data() as Space.Response;
    const fieldsToTrack = ["description", "name", "photo"];
    const beforeChanges = pick(before, fieldsToTrack);
    const afterChanges = pick(after, fieldsToTrack);
    const noChanges = isEqual(beforeChanges, afterChanges);

    if (noChanges) {
      return false;
    }

    const activity: Activity.UpdateSpace = {
      action: "updated",
      after,
      before,
      category: "spaces",
      categoryId: spaceId,
      createdByUid: after.updatedByUid,
      fullItemPath: `spaces/${spaceId as string}`,
      itemPath: `spaces/${spaceId as string}`,
      spaceId,
      updatedAt: after.updatedAt,
      user: after.updatedBy,
      userNotification: [],
    };

    return db.collection("activity").add(activity);
  });

export default activitySpaceUpdate;
