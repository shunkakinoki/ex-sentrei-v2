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
      Partial<Pick<Profile.Get, "name" | "image">> {
    status: "active";
    type: "anonymous" | "user";
  }

  export type AdminUpdate = Partial<Fields>;

  export interface Response
    extends Fields,
      Pick<Metadata.Response, "createdAt" | "updatedAt"> {}

  export interface Create
    extends Fields,
      Pick<Metadata.Create, "createdAt" | "updatedAt"> {}

  export interface Update
    extends Partial<EditableFields>,
      Pick<Metadata.Update, "updatedAt"> {}

  export interface Get extends Fields, Pick<Metadata.Get, "createdAt"> {
    id: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.default.firestore.DocumentSnapshot;
  }
}

export default Customer;
