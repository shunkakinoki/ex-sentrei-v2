/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {WebClient} from "@slack/web-api";
import * as functions from "firebase-functions";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const config = functions.config().env;

export default new WebClient(config.slack.apiToken);
