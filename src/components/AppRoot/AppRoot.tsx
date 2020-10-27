import {useEffect} from "react";

import auth from "@/firebase/auth";
import db from "@/firebase/db";
import performance from "@/firebase/performance";

export default function AppRoot(): null {
  useEffect(() => {
    // eslint-disable-next-line no-console
    auth.onAuthStateChanged(console.log);
  }, []);

  useEffect(() => {
    db.settings({});
  });

  useEffect(() => {
    performance();
  }, []);

  return null;
}
