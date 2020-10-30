import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Namespace from "@/types/Namespace";
import Profile from "@/types/Profile";
import User from "@/types/User";

const db = admin.firestore();

function getNameFromEmail(email: string): string {
  if (email.lastIndexOf("@") === -1) {
    return email;
  }
  return email.substring(0, email.lastIndexOf("@"));
}

/**
 * Setup profile on user create
 */
const userBatchSet = functions.auth.user().onCreate(async user => {
  const batch = db.batch();

  const namespaceData: Namespace = {
    uid: user.uid,
    model: "user",
  };

  const profileData: Profile.Response = {
    name: user.displayName || getNameFromEmail(user.email || user.uid),
    namespaceId: user.uid,
    image: user.photoURL || null,
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const userData: User.Response = {
    ...profileData,
    email: user?.email || null,
    role: "viewer",
  };

  const namespaceRef = db.doc(`namespaces/${user.uid}`);
  batch.set(namespaceRef, namespaceData, {merge: true});

  const userRef = db.doc(`users/${user.uid}`);
  batch.set(userRef, userData, {merge: true});

  const profileRef = db.doc(`profiles/${user.uid}`);
  batch.set(profileRef, profileData, {merge: true});

  return batch.commit();
});

export default userBatchSet;
