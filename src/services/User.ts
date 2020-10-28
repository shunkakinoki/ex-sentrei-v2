import db from "@/firebase/db";
import {serializeUser} from "@/serializers/User";
import User from "@/types/User";

export const userConverter: firebase.default.firestore.FirestoreDataConverter<User.Get> = {
  toFirestore(data: User.Get) {
    return data;
  },
  fromFirestore(
    snapshot: firebase.default.firestore.QueryDocumentSnapshot<User.Response>,
  ): User.Get {
    return serializeUser(snapshot);
  },
};

export const getUser = async (userId: string): Promise<User.Get | null> => {
  const snap = await db
    .doc(`users/${userId}`)
    .withConverter(userConverter)
    .get();

  return snap.data() || null;
};

export const getUserLive = (
  userId: string,
  onSnapshot: (snap: User.Get | null) => void,
): firebase.default.Unsubscribe => {
  return db
    .doc(`users/${userId}`)
    .withConverter(userConverter)
    .onSnapshot(snap => {
      onSnapshot(snap.data() || null);
    });
};
