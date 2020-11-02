/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Activity from "@/types/Activity";
import Space from "@/types/Space";

const db = admin.firestore();

/**
 * Create space activity on create
 */
const activitySpaceCreate = functions.firestore
  .document("spaces/{spaceId}")
  .onCreate(async (snap, context) => {
    const {spaceId} = context.params;

    const data = snap.data() as Space.Response;

    if (!data.createdByUid || !data.updatedBy || !data.updatedByUid) {
      return false;
    }

    const activity: Activity.CreateSpace = {
      action: "created",
      after: data,
      before: null,
      category: "spaces",
      categoryId: spaceId,
      createdByUid: data.updatedByUid,
      fullItemPath: `spaces/${spaceId as string}`,
      itemPath: `spaces/${spaceId as string}`,
      spaceId,
      updatedAt: data.updatedAt,
      user: data.updatedBy,
      userId: data.updatedByUid,
      userNotification: [],
    };

    return db.collection("activity").add(activity);
  });

export default activitySpaceCreate;
