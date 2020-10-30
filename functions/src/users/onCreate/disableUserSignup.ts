import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const config = functions.config().env;
const auth = admin.auth();

/**
 * Disable signup on user create
 */
const disableUserSignup = functions.auth.user().onCreate(user => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (config.environment !== "main") {
    return null;
  }
  return (
    auth
      .updateUser(user.uid, {disabled: true})
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .catch(err => console.error(`Error disable signup: ${err}`))
  );
});

export default disableUserSignup;
