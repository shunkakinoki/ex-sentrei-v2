import {ReactNode} from "react";

export interface Props {
  children: ReactNode;
}

export default function ContainerCenter({children}: Props): JSX.Element {
  return (
    <div className="flex items-center justify-center px-2 pt-2 mt-2 md:pt-4 lg:pt-6 xl:pt-12 sm:px-4 lg:px-6">
      {children}
    </div>
  );
}
