import firebase from "@/firebase";
import "firebase/functions";

const functions = firebase.functions();

// if (window.location.hostname === "localhost") {
//   functions.useEmulator("localhost", 5001);
// }

export default functions;
