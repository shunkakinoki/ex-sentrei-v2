// eslint-disable-next-line import/prefer-default-export
export const serializeFirebaseDate = (
  date: firebase.default.firestore.Timestamp,
): string => {
  const newDate = date.toDate();

  return newDate.toLocaleDateString();
};
