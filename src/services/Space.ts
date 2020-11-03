import db from "@/firebase/db";
import {serializeSpace} from "@/serializers/Space";
import Space from "@/types/Space";

export const spaceConverter: firebase.default.firestore.FirestoreDataConverter<Space.Get> = {
  fromFirestore(
    snapshot: firebase.default.firestore.QueryDocumentSnapshot<Space.Response>,
  ): Space.Get {
    return serializeSpace(snapshot);
  },
  toFirestore(data: Space.Get) {
    return data;
  },
};

export const getSpace = async (spaceId: string): Promise<Space.Get | null> => {
  const snap = await db
    .doc(`spaces/${spaceId}`)
    .withConverter(spaceConverter)
    .get();

  return snap.data() || null;
};

export const getSpaceLive = (
  spaceId: string,
  onSnapshot: (snap: Space.Get | null) => void,
): firebase.default.Unsubscribe => {
  return db
    .doc(`spaces/${spaceId}`)
    .withConverter(spaceConverter)
    .onSnapshot(snap => {
      onSnapshot(snap.data() || null);
    });
};

export const updateSpace = (
  spaceId: string,
  space: Space.Update,
): Promise<void> => {
  return db.doc(`spaces/${spaceId}`).update(space);
};
