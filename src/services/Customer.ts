import db from "@/firebase/db";
import {serializeCustomer} from "@/serializers/Customer";
import Customer, {CustomerQuery} from "@/types/Customer";

export const customerConverter: firebase.default.firestore.FirestoreDataConverter<Customer.Get> = {
  fromFirestore(
    snapshot: firebase.default.firestore.QueryDocumentSnapshot<
      Customer.Response
    >,
  ): Customer.Get {
    return serializeCustomer(snapshot);
  },
  toFirestore(data: Customer.Get) {
    return data;
  },
};

export const customerQuery = ({
  limit = 10,
  end,
  spaceId,
  start,
  status,
  startAfter,
}: CustomerQuery): firebase.default.firestore.Query<Customer.Get> => {
  let ref = db
    .collection(`spaces/${spaceId}/customers`)
    .withConverter(customerConverter)
    .limit(limit);

  if (status) {
    ref = ref.where("status", "==", status).orderBy("createdAt", "desc");
  }
  if (start) {
    ref = ref.where("spaceNum", "<=", start).orderBy("spaceNum", "desc");
  }
  if (end) {
    ref = ref.where("spaceNum", ">", end);
  }
  if (startAfter) {
    ref = ref.startAfter(startAfter);
  }

  return ref;
};

export const getCustomer = async (
  spaceId: string,
  customerId: string,
): Promise<Customer.Get | null> => {
  const snap = await db
    .doc(`spaces/${spaceId}/customers/${customerId}`)
    .withConverter(customerConverter)
    .get();

  return snap.data() || null;
};

export const getCustomers = async (
  query: CustomerQuery,
): Promise<Customer.Get[]> => {
  const snap = await customerQuery(query).get();
  return snap.docs.map(doc => doc.data());
};

export const validateCustomer = async (
  spaceId: string,
  customerId: string,
): Promise<boolean> => {
  const namespace = await db
    .doc(`spaces/${spaceId}/customers/${customerId}`)
    .get();
  return !namespace.exists;
};
