import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Namespace from "@/types/Namespace";
import Profile from "@/types/Profile";
import Space from "@/types/Space";
import User from "@/types/User";

const db = admin.firestore();
const timestamp = admin.firestore.Timestamp.now();

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

  const profileNamespaceData: Namespace.Response = {
    id: user.uid,
    model: "profiles",
  };

  const spaceNamespaceData: Namespace.Response = {
    id: user.uid,
    model: "spaces",
  };

  const profileData: Profile.Response = {
    bio: null,
    name: user.displayName || getNameFromEmail(user.email || user.uid),
    namespaceId: `@${user.uid}`,
    image: user.photoURL || null,
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const userData: User.Response = {
    ...profileData,
    email: user?.email || null,
    role: "viewer",
  };

  const spaceData: Space.Response = {
    articleCount: 0,
    customerCount: 0,
    authorUids: [user.uid],
    createdAt: timestamp,
    createdBy: profileData,
    createdByUid: user.uid,
    description: null,
    plan: "free",
    memberCount: 1,
    title: `${profileData.name}'s Publication`,
    image: user.photoURL || null,
    namespaceId: user.uid,
    updatedAt: timestamp,
    updatedBy: profileData,
    updatedByUid: user.uid,
  };

  const profileNamespaceRef = db.doc(`namespaces/@${user.uid}`);
  batch.set(profileNamespaceRef, profileNamespaceData, {merge: true});

  const spaceNamespaceRef = db.doc(`namespaces/${user.uid}`);
  batch.set(spaceNamespaceRef, spaceNamespaceData, {merge: true});

  const userRef = db.doc(`users/${user.uid}`);
  batch.set(userRef, userData, {merge: true});

  const profileRef = db.doc(`profiles/${user.uid}`);
  batch.set(profileRef, profileData, {merge: true});

  const spaceRef = db.doc(`spaces/${user.uid}`);
  batch.set(spaceRef, spaceData, {merge: true});

  return batch.commit();
});

export default userBatchSet;
