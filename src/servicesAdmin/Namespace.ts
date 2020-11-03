import adminDb from "@/firebaseAdmin/db";
import {serializeAdminNamespace} from "@/serializers/Namespace";
import Namespace from "@/types/Namespace";

export const namespaceConverter: FirebaseFirestore.FirestoreDataConverter<Namespace.Get> = {
  fromFirestore(
    snapshot: FirebaseFirestore.QueryDocumentSnapshot<Namespace.Response>,
  ): Namespace.Get {
    return serializeAdminNamespace(snapshot);
  },
  toFirestore(data: Namespace.Get) {
    return data;
  },
};

export const getAdminNamespace = async (
  namespaceId: string,
): Promise<Namespace.Get | null> => {
  const snap = await adminDb
    .doc(`namespaces/${namespaceId}`)
    .withConverter(namespaceConverter)
    .get();

  return snap.data() || null;
};
