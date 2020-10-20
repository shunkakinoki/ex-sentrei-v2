import {ReactNode} from "react";

export interface Props {
  children: ReactNode;
}

export default function RootContainer({children}: Props): JSX.Element {
  return (
    <div className="container min-h-screen px-4 mx-auto sm:px-5 md:px-6">
      {children}
    </div>
  );
}
