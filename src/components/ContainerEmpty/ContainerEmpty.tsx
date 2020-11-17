import {ReactNode} from "react";

export interface Props {
  children: ReactNode;
}

export default function ContainerEmpty({children}: Props): JSX.Element {
  return (
    <div className="flex items-center justify-center h-30v">{children}</div>
  );
}
