import firebase from "@/firebase";
import "firebase/auth";

const db = firebase.firestore();

export const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export default db;
