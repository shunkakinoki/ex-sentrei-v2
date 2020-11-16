import {ReactNode} from "react";

export interface Props {
  children: ReactNode;
}

export default function ContainerRoot({children}: Props): JSX.Element {
  return (
    <div className="w-full max-w-screen-xl px-3 mx-auto sm:px-4 md:px-5 lg:px-6">
      {children}
    </div>
  );
}
