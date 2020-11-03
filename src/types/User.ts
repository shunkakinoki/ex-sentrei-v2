/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-namespace */

import Profile from "@/types/Profile";

declare namespace User {
  export interface Fields extends Profile.Fields {
    email: string | null;
    lastSpaceId?: string;
    name: string;
    role: "admin" | "moderator" | "viewer";
  }

  export type Response = Fields;

  export interface Get extends Response {
    uid: string;
  }

  export interface Snapshot extends Get {
    snap: FirebaseFirestore.DocumentSnapshot;
  }

  export type Update = Partial<Response>;
}

export default User;
