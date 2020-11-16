import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Space from "@/types/Space";
import Customer from "@/types/Customer";

const db = admin.firestore();

/**
 * Increase customer count to arbitrary collection
 */
const customerCountPlus = functions.firestore
  .document("customers/{customerId}")
  .onCreate(snap => {
    return db.runTransaction(async transaction => {
      const data = snap.data() as Customer.Response;

      const spaceRef = db.doc(`spaces/${data.spaceId}`);
      const spaceData = (
        await transaction.get(spaceRef)
      ).data() as Space.Response;

      const number = (spaceData.customerCount as number) + 1;

      transaction.update(spaceRef, {
        customerCount: number,
      });

      const customerRef = snap.ref;

      transaction.set(
        customerRef,
        {
          spaceNum: number,
        },
        {merge: true},
      );
    });
  });

export default customerCountPlus;
