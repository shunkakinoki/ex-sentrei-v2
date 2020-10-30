import firebase from "@/firebase";
import "firebase/auth";

const db = firebase.firestore();

// if (window.location.hostname === "localhost") {
//   db.settings({
//     host: "localhost:8080",
//     ssl: false,
//   });
// }

export const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export default db;
