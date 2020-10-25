import {ReactNode} from "react";

import TabDashboard, {
  Props as TabDashboardProps,
} from "@/components/TabDashboard";

export interface Props extends Omit<TabDashboardProps, "active"> {
  children: ReactNode;
}

export default function ContainerDashboard({
  children,
  type,
  namespace,
}: Props): JSX.Element {
  return (
    <div className="flex flex-col justify-center md:flex-row ">
      <div className="w-full mt-8 md:w-1/4 lg:w-1/6 sm:px-6 lg:px-8 sm:mt-12 md:mt-16 ">
        <div className="flex flex-col ">
          <TabDashboard
            active={type === "articles"}
            namespace={namespace}
            type="articles"
          />
          <TabDashboard
            active={type === "sales"}
            namespace={namespace}
            type="sales"
          />
          <TabDashboard
            active={type === "settings"}
            namespace={namespace}
            type="settings"
          />
        </div>
      </div>
      <div className="w-full px-3 md:w-3/4 lg:w-5/6">
        <div className="flex flex-col mt-4 md:px-6 lg:px-9 md:mt-6 lg:mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
