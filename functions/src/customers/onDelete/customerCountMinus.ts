/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Customer from "@/types/Customer";
import Space from "@/types/Space";

const db = admin.firestore();

/**
 * Decrease customer count to arbitrary collection
 */
const customerCountMinus = functions.firestore
  .document("customers/{customerId}")
  .onDelete(snap => {
    return db.runTransaction(async transaction => {
      const data = snap.data() as Customer.Response;

      const spaceRef = db.doc(`spaces/${data.spaceId}`);
      const spaceData = (
        await transaction.get(spaceRef)
      ).data() as Space.Response;

      const number = (spaceData.customerCount as number) - 1;

      transaction.update(spaceRef, {
        customerCount: number,
      });

      return db
        .collection("customers")
        .where("spaceNum", ">", data.spaceNum)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const customerData = doc.data() as Customer.Response;

            const spaceNum = (customerData?.spaceNum as number) - 1;

            transaction.set(
              doc.ref,
              {
                spaceNum,
              },
              {merge: true},
            );
          });
        });
    });
  });

export default customerCountMinus;
