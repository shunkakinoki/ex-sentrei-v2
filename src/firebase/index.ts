import firebase from "firebase/app";

import {isProduction} from "@/utils/env";

firebase.setLogLevel(isProduction ? "silent" : "info");

const betaConfig = {
  apiKey: "AIzaSyAAW-quTzZOZjkm2tyzQMoWacKN9x9-s6A",
  authDomain: "sentrei-beta.firebaseapp.com",
  databaseURL: "https://sentrei-beta.firebaseio.com",
  projectId: "sentrei-beta",
  storageBucket: "sentrei-beta.appspot.com",
  messagingSenderId: "258612152633",
  appId: "1:258612152633:web:1fd7236c0410da67ff40e8",
  measurementId: "G-S1CCQTFCVT",
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_ID as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID as string,
};

if (!firebase.apps.length) {
  firebase.initializeApp(
    process.env.VERCEL_GITHUB_COMMIT_REF === "refs/heads/main"
      ? firebaseConfig
      : betaConfig,
  );
}

export default firebase;
