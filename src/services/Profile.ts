import db from "@/firebase/db";
import {serializeProfile} from "@/serializers/Profile";
import Profile from "@/types/Profile";

export const profileConverter: firebase.default.firestore.FirestoreDataConverter<Profile.Get> = {
  toFirestore(data: Profile.Get) {
    return data;
  },
  fromFirestore(
    snapshot: firebase.default.firestore.QueryDocumentSnapshot<
      Profile.Response
    >,
  ): Profile.Get {
    return serializeProfile(snapshot);
  },
};

export const getProfile = async (
  profileId: string,
): Promise<Profile.Get | null> => {
  const snap = await db
    .doc(`profiles/${profileId}`)
    .withConverter(profileConverter)
    .get();

  return snap.data() || null;
};

export const getProfileLive = (
  profileId: string,
  onSnapshot: (snap: Profile.Get | null) => void,
): firebase.default.Unsubscribe => {
  return db
    .doc(`profiles/${profileId}`)
    .withConverter(profileConverter)
    .onSnapshot(snap => {
      onSnapshot(snap.data() || null);
    });
};
