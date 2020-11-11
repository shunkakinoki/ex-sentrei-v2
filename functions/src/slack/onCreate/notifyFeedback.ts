/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import * as functions from "firebase-functions";

import Feedback from "@/types/Feedback";
import createMessageArgs from "../../helpers/slack/createMessageArgs";
import SlackClient from "../../helpers/slack/SlackClient";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const config = functions.config().env;

const createSlackMessage = (data: Feedback.Response): string => {
  return `Emoji: ${data.emoji || ""}\nDescription: ${data.description || ""}`;
};

/**
 * Notify feedback to slack
 */
const notifyFeedback = functions.firestore
  .document("feedback/{feedbackId}")
  .onCreate(async (snap, context) => {
    const data = snap.data() as Feedback.Response;

    const message = createSlackMessage(data);
    const args = createMessageArgs(
      context,
      `feedback-${config.environment}-log`,
      message,
    );
    await SlackClient.chat.postMessage(args);
  });

export default notifyFeedback;
