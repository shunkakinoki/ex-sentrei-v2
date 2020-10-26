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
    <div className="flex flex-col justify-center lg:flex-row ">
      <div className="w-full mt-2 lg:w-1/6 sm:mt-3 md:mt-8 lg:mt-12 ">
        <div className="flex flex-col ">
          <TabDashboard
            active={type === "articles"}
            namespace={namespace}
            type="articles"
          />
          <TabDashboard
            active={type === "branding"}
            namespace={namespace}
            type="branding"
          />
          <TabDashboard
            active={type === "customers"}
            namespace={namespace}
            type="customers"
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
      <div className="w-full sm:px-1 md:px-2 lg:px-3 lg:w-5/6">
        <div className="flex flex-col mx-1 mt-4 sm:mx-2 md:mx-3 md:px-6 lg:px-9 md:mt-6 lg:mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
