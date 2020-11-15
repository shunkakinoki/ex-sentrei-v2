import db from "@/firebase/db";
import {serializeCustomer} from "@/serializers/Customer";
import Customer from "@/types/Customer";

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

export const validateCustomer = async (
  spaceId: string,
  customerId: string,
): Promise<boolean> => {
  const namespace = await db
    .doc(`spaces/${spaceId}/customers/${customerId}`)
    .get();
  return !namespace.exists;
};
