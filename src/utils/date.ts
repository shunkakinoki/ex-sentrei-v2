import firebase from "@/firebase";

// eslint-disable-next-line import/prefer-default-export
export const serializeFirebaseDate = (date: {
  nanoseconds: number;
  seconds: number;
}): string => {
  const {Timestamp} = firebase.firestore;
  const newDate = date
    ? new Timestamp(date.seconds, date.nanoseconds).toDate()
    : new Date();

  return newDate.toLocaleDateString();
};
