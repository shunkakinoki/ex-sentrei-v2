import {ThemeProvider} from "next-themes";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode;
}

export default function GlobalRoot({children}: Props): JSX.Element {
  return <ThemeProvider>{children}</ThemeProvider>;
}
