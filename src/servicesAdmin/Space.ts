import adminDb from "@/firebaseAdmin/db";
import {serializeAdminSpace} from "@/serializers/Space";
import Space from "@/types/Space";

export const spaceConverter: FirebaseFirestore.FirestoreDataConverter<Space.Get> = {
  fromFirestore(
    snapshot: FirebaseFirestore.QueryDocumentSnapshot<Space.Response>,
  ): Space.Get {
    return serializeAdminSpace(snapshot);
  },
  toFirestore(data: Space.Get) {
    return data;
  },
};

export const getAdminSpace = async (
  spaceId: string,
): Promise<Space.Get | null> => {
  const snap = await adminDb
    .doc(`spaces/${spaceId}`)
    .withConverter(spaceConverter)
    .get();

  return snap.data() || null;
};
