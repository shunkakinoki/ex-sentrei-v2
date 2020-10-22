import {ReactNode} from "react";

export interface Props {
  children: ReactNode;
}

export default function ContainerCenter({children}: Props): JSX.Element {
  return (
    <div className="flex items-center justify-center px-4 py-12 mt-8 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
