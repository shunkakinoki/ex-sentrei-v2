import {ReactNode} from "react";

export interface Props {
  children: ReactNode;
}

export default function ContainerCenter({children}: Props): JSX.Element {
  return (
    <div className="flex items-center justify-center px-4 py-12 mt-8 sm:px-6 lg:px-8 sm:mt-12 md:mt-16 lg:mt-24 xl:mt-32">
      {children}
    </div>
  );
}
