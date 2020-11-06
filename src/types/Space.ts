/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Metadata from "@/types/Metadata";

export type Plan = "free" | "pro" | "premium";
export type NotificationType = "app" | "email";

export interface NotificationSettings {
  analytics?: boolean;
  app?: "everything" | "email" | "nothing";
  customer?: boolean;
  sales?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Space {
  export type EditableFields = {
    description: string | null;
    image: string | null;
    plan: Plan;
    settings?: NotificationSettings;
    title: string;
  };

  interface Fields extends EditableFields {
    articleCount: firebase.default.firestore.FieldValue | number;
    customerCount: firebase.default.firestore.FieldValue | number;
    memberCount: firebase.default.firestore.FieldValue | number;
    namespaceId: string;
  }

  export type AdminUpdate = Partial<Fields>;

  export interface Response extends Fields, Metadata.Response {}

  export interface Create extends Fields, Metadata.Create {}

  export interface Update extends Partial<EditableFields>, Metadata.Update {}

  export interface Get extends Fields, Metadata.Get {
    articleCount: number;
    customerCount: number;
    id: string;
    memberCount: number;
  }

  export interface Snapshot extends Get {
    snap: firebase.default.firestore.DocumentSnapshot;
  }
}

export default Space;
