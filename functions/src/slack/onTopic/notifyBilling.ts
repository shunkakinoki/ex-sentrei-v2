/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as functions from "firebase-functions";

import createMessageArgs from "../../helpers/slack/createMessageArgs";
import SlackClient from "../../helpers/slack/SlackClient";

const config = functions.config().env;

const eventToBilling = (data: any): JSON => {
  return JSON.parse(Buffer.from(data, "base64").toString());
};

const createSlackMessage = (pubsubMessage: any): string => {
  return `CostAmount: ${pubsubMessage.costAmount}\nProjectName: ${pubsubMessage.budgetDisplayName}`;
};

/**
 * Notify billing to slack for project
 */
const notifyBilling = functions.pubsub
  .topic(`sentrei-${config.environment}-billing`)
  .onPublish(async (event, context) => {
    const message = createSlackMessage(eventToBilling(event.data));
    const args = createMessageArgs(
      context,
      `gcp-billing-${config.environment}-log`,
      message,
    );
    await SlackClient.chat.postMessage(args);
  });

export default notifyBilling;
