/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Head from "next/head";
import {useEffect} from "react";
import {toast} from "react-toastify";

import firebase from "@/firebase";
import auth from "@/firebase/auth";
import useAuth from "@/hooks/useAuth";

export interface Props {
  delay?: boolean;
}

const betaConfig =
  "258612152633-ogo75b3nj6425lq4htpa0u8uonlkrkki.apps.googleusercontent.com";
const clientId = process.env.NEXT_PUBLIC_DATA_CLIENT_ID as string;

const oneTap = (callback: (res: any) => Promise<void>): void => {
  if (window.google) {
    window.google.accounts.id.initialize({
      callback,
      client_id:
        process.env.VERCEL_GITHUB_COMMIT_REF === "main" ? clientId : betaConfig,
      context: "use",
    });
    window.google.accounts.id.prompt();
  }
};

const OneTap = ({delay = false}: Props): JSX.Element => {
  const {authState} = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const callback = async (res: any): Promise<void> => {
    const FirebaseCredential = firebase.auth.GoogleAuthProvider.credential(
      res.credential,
    );
    await auth
      .signInWithCredential(FirebaseCredential)
      .then(() => {})
      .catch(err => toast.error("error", err.message));
  };

  useEffect(() => {
    if (!delay && !authState) {
      oneTap(callback);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (delay && !authState) {
        oneTap(callback);
      }
    }, 3000);
    return (): void => clearTimeout(timer);
  });

  return (
    <Head>
      <script async defer src="https://accounts.google.com/gsi/client" />
    </Head>
  );
};

export default OneTap;
