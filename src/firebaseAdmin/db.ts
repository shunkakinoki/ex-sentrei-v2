import admin from "@/firebaseAdmin";

const db = admin.firestore();

export const timestamp = admin.firestore.FieldValue.serverTimestamp();

export default db;
