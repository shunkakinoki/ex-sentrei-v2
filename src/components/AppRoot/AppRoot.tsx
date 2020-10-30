import {ThemeProvider} from "next-themes";
import {useEffect, ReactNode} from "react";

import performance from "@/firebase/performance";

export interface Props {
  children: ReactNode;
}

export default function AppRoot({children}: Props): JSX.Element {
  useEffect(() => {
    performance();
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}
