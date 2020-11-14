/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Metadata from "@/types/Metadata";
import Profile from "@/types/Profile";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Customer {
  export type EditableFields = {
    email: string;
    status: "active";
  };

  type Fields = EditableFields;

  export type AdminUpdate = Partial<Fields>;

  export interface Response extends Fields, Profile.Get, Metadata.Response {}

  export interface Create extends Fields, Profile.Get, Metadata.Create {}

  export interface Update extends Partial<EditableFields>, Metadata.Update {}

  export interface Get extends Fields, Profile.Get, Metadata.Get {
    id: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.default.firestore.DocumentSnapshot;
  }
}

export default Customer;
