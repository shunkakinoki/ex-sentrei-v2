/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Stats, {statsCollection} from "@/types/Stats";

const db = admin.firestore();

/**
 * Increase stats count
 */
const statsPlus = functions.firestore
  .document("{collection}/{docId}")
  .onCreate((_, context) => {
    const {collection} = context.params;

    if (!statsCollection.includes(collection)) {
      return false;
    }

    const statsData = <Stats.Fields>{
      [collection]: admin.firestore.FieldValue.increment(1),
    };

    return db.doc("admin/stats").set(statsData, {merge: true});
  });

export default statsPlus;
