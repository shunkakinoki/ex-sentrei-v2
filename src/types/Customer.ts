/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Metadata from "@/types/Metadata";
import Profile from "@/types/Profile";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Customer {
  export type EditableFields = {
    email: string;
  };

  export interface Fields
    extends EditableFields,
      Pick<Profile.Get, "name" | "image"> {
    status: "active";
    type: "anonymous" | "user";
  }

  export type AdminUpdate = Partial<Fields>;

  export interface Response extends Fields, Metadata.Response {}

  export interface Create extends Fields, Metadata.Create {}

  export interface Update extends Partial<EditableFields>, Metadata.Update {}

  export interface Get extends Fields, Metadata.Get {
    id: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.default.firestore.DocumentSnapshot;
  }
}

export default Customer;
