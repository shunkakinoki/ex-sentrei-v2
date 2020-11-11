/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as functions from "firebase-functions";
import CloudinaryClient from "../../helpers/cloudinary/CloudinaryClient";

/**
 * Upload cloudinary image
 */
export const uploadImage = functions.https.onCall(async (data, context) => {
  const uid = context.auth?.uid;
  if (!uid) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "You need to be logged in to continue.",
    );
  }

  const {dataUrl} = data;
  if (!dataUrl) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "dataUrl is required!",
    );
  }

  try {
    const result = await CloudinaryClient.uploader.upload(dataUrl);
    return JSON.stringify(result);
  } catch (err) {
    console.error(err);
    throw new functions.https.HttpsError("internal", err.message);
  }
});

export default uploadImage;
