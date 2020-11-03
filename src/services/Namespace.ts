import {
  reservedNames,
  reservedNamepages,
  reservedNamespaces,
} from "@/const/reserved";
import db from "@/firebase/db";
import {serializeNamespace} from "@/serializers/Namespace";
import Namespace from "@/types/Namespace";

export const isReservedNamespace = (namespaceId: string): boolean => {
  return reservedNamespaces
    .concat(reservedNames, reservedNamepages)
    .includes(namespaceId);
};

export const namespaceConverter: firebase.default.firestore.FirestoreDataConverter<Namespace.Get> = {
  fromFirestore(
    snapshot: firebase.default.firestore.QueryDocumentSnapshot<
      Namespace.Response
    >,
  ): Namespace.Get {
    return serializeNamespace(snapshot);
  },
  toFirestore(data: Namespace.Get) {
    return data;
  },
};

export const createNamespace = async (
  namespaceId: string,
  namespace: Namespace.Create,
): Promise<void> => {
  await db.doc(`namespaces/${namespaceId}`).set(namespace, {merge: false});
};

export const getNamespace = async (
  namespaceId: string,
): Promise<Namespace.Get | null> => {
  const snap = await db
    .doc(`namespaces/${namespaceId}`)
    .withConverter(namespaceConverter)
    .get();

  return snap.data() || null;
};

export const validateNamespace = async (
  namespaceId: string,
): Promise<boolean> => {
  if (isReservedNamespace(namespaceId)) {
    return false;
  }

  const namespace = await db.doc(`namespaces/${namespaceId}`).get();
  return !namespace.exists;
};
