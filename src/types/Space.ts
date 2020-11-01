/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Metadata from "@/types/Metadata";
import Profile from "@/types/Profile";

export type Plan = "free" | "pro" | "premium";
export type NotificationType = "app" | "email";

export interface NotificationSettings {
  analytics?: boolean;
  customer?: boolean;
  sales?: boolean;
  app?: "everything" | "email" | "nothing";
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Space {
  export type EditableFields = {
    description: string | null;
    title: string;
    image: string | null;
    plan: Plan;
    settings?: NotificationSettings;
  };

  interface Fields extends EditableFields {
    authors: Profile.Fields[];
    namespaceId: string;
  }

  export type AdminUpdate = Partial<Fields>;

  export interface Response extends Fields, Metadata.Response {}

  export interface Create extends Fields, Metadata.Create {}

  export interface Update extends Partial<EditableFields>, Metadata.Update {}

  export interface Get extends Fields, Metadata.Get {
    uid: string;
  }

  export interface Snapshot extends Get {
    snap: FirebaseFirestore.DocumentSnapshot;
  }
}

export default Space;
