import {ReactNode} from "react";

export interface Props {
  children: ReactNode;
}

export default function RootContainer({children}: Props): JSX.Element {
  return <div className="container min-h-screen px-5 mx-auto">{children}</div>;
}
