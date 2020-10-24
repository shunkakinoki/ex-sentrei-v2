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
    <div className="flex flex-col items-center justify-center px-4 py-12 mt-8 md:flex-row sm:px-6 lg:px-8 sm:mt-12 md:mt-16 ">
      <div className="w-full md:w-1/4 lg:w-1/6">
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
      <div className="md:w-3/4 lg:w-5/6">{children}</div>
    </div>
  );
}
