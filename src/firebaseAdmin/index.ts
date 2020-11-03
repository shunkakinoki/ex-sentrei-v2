/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as admin from "firebase-admin";
import getConfig from "next/config";

const {serverRuntimeConfig} = getConfig();

const firebaseAdminConfig = {
  credential: admin.credential.cert({
    clientEmail: serverRuntimeConfig.FIREBASE_CLIENT_EMAIL,
    privateKey: serverRuntimeConfig.FIREBASE_PRIVATE_KEY?.replace(
      /\\n/gm,
      "\n",
    ),
    projectId:
      process.env.VERCEL_GITHUB_COMMIT_REF === "main"
        ? process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
        : "sentrei-beta",
  }),
  databaseURL:
    process.env.VERCEL_GITHUB_COMMIT_REF === "main"
      ? process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
      : "https://sentrei-beta.firebaseio.com",
};

if (!admin.apps.length) {
  admin.initializeApp(firebaseAdminConfig);
}

export default admin;
