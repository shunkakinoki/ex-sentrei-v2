/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import firebase from "firebase";

import Metadata from "@/types/Metadata";
import Profile from "@/types/Profile";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Member {
  export type Role = "admin" | "moderator" | "viewer";

  export type EditableFields = {
    role: Role;
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
    snap: firebase.firestore.DocumentSnapshot;
  }
}

export default Member;
