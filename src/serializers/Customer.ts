/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Customer from "@/types/Customer";
import {serializeFirebaseDate} from "@/utils/date";

export const serializeCustomer = (
  snap: firebase.default.firestore.DocumentSnapshot<Customer.Response>,
): Customer.Get => {
  const data = snap.data()!;

  return {
    ...data,
    createdAt: serializeFirebaseDate(data.createdAt),
    id: snap.id,
    updatedAt: serializeFirebaseDate(data.updatedAt),
  };
};

export const serializeAdminCustomer = (
  snap: FirebaseFirestore.DocumentSnapshot<Customer.Response>,
): Customer.Get => {
  const data = snap.data()!;

  return {
    ...data,
    createdAt: serializeFirebaseDate(data.createdAt),
    id: snap.id,
    updatedAt: serializeFirebaseDate(data.updatedAt),
  };
};
