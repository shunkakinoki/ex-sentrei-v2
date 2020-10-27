import {ThemeProvider} from "next-themes";
import {useEffect, ReactNode} from "react";

import auth from "@/firebase/auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import db from "@/firebase/db";
import performance from "@/firebase/performance";

export interface Props {
  children: ReactNode;
}

export default function AppRoot({children}: Props): JSX.Element {
  useEffect(() => {
    // eslint-disable-next-line no-console
    auth.onAuthStateChanged(console.log);
  }, []);

  useEffect(() => {
    performance();
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}
