import adminDb from "@/firebaseAdmin/db";
import {serializeAdminProfile} from "@/serializers/Profile";
import Profile from "@/types/Profile";

export const profileConverter: FirebaseFirestore.FirestoreDataConverter<Profile.Get> = {
  fromFirestore(
    snapshot: FirebaseFirestore.QueryDocumentSnapshot<Profile.Response>,
  ): Profile.Get {
    return serializeAdminProfile(snapshot);
  },
  toFirestore(data: Profile.Get) {
    return data;
  },
};

export const getAdminProfile = async (
  profileId: string,
): Promise<Profile.Get | null> => {
  const snap = await adminDb
    .doc(`profiles/${profileId}`)
    .withConverter(profileConverter)
    .get();

  return snap.data() || null;
};
