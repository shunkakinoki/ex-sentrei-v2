/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import * as functions from "firebase-functions";
import * as cloudinary from "cloudinary";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const config = functions.config().env;

const cloudinaryV2 = cloudinary.v2;

cloudinaryV2.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});

export default cloudinaryV2;
