import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Namespace from "@/types/Namespace";
import Profile from "@/types/Profile";
import Space from "@/types/Space";

const db = admin.firestore();

/**
 * Update profile on create
 */
const namespaceUpdate = functions.firestore
  .document("namespaces/{namespaceId}")
  .onCreate(snap => {
    const data = snap.data() as Namespace.Response;

    if (data.model === "spaces") {
      return db
        .doc(`spaces/${data.id}`)
        .update(<Space.AdminUpdate>{namespaceId: snap.id});
    }

    return db
      .doc(`profiles/${data.id}`)
      .update(<Profile.AdminUpdate>{namespaceId: snap.id});
  });

export default namespaceUpdate;
