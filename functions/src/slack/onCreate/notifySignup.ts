/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import SlackClient from "../../helpers/slack/SlackClient";
import createMessageArgs from "../../helpers/slack/createMessageArgs";

const config = functions.config().env;

const createSlackMessage = (event: admin.auth.UserRecord): string => {
  return `Email: ${event.email}\nName: ${event.displayName}\nProvider: ${
    event.providerData[event.providerData.length - 2]
  }`;
};

/**
 * Notify signup to slack
 */
const notifySignup = functions.auth.user().onCreate(async (event, context) => {
  const message = createSlackMessage(event);
  const args = createMessageArgs(
    context,
    `signup-${config.environment}-log`,
    message,
  );
  await SlackClient.chat.postMessage(args);
});

export default notifySignup;
