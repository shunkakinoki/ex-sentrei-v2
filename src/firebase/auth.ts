import firebase from "@/firebase";
import "firebase/auth";

const auth = firebase.auth();

// if (window.location.hostname === "localhost") {
//   auth.useEmulator("http://localhost:9099");
// }

export default auth;
