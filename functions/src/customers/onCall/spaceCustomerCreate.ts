/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import Customer from "@/types/Customer";

const db = admin.firestore();
const timestamp = admin.firestore.Timestamp.now();
/**
 * Create Custome  for Space
 */
const spaceCustomerCreate = functions.https.onCall(async (data, context) => {
  const uid = context.auth?.uid;
  if (!uid) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "You need to be logged in to continue.",
    );
  }

  const {email} = data;
  if (!email) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "inviteId is required!",
    );
  }

  const {spaceId} = data;
  if (!spaceId) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "inviteId is required!",
    );
  }

  try {
    if ((await db.doc(`spaces/${spaceId}/customers/${uid}`).get()).exists) {
      throw new Error("Customer already exists!");
    }

    const customerData: Customer.Create = {
      createdAt: timestamp,
      updatedAt: timestamp,
      email,
      type: "anonymous",
      status: "active",
    };

    return db.doc(`spaces/${spaceId}/customers/${uid}`).set(customerData);
  } catch (err) {
    throw new functions.https.HttpsError("internal", err);
  }
});

export default spaceCustomerCreate;
