/* eslint-disable @typescript-eslint/no-namespace */

import Social from "@/types/Social";

declare namespace Profile {
  export type EditableFields = {
    bio: string | null;
    image: string | null;
    name: string;
    social?: Social;
  };

  interface Fields extends EditableFields {
    namespaceId: string;
  }

  export type AdminUpdate = Partial<Fields>;

  export type Response = Fields;

  export type Update = Partial<Response>;

  export interface Get extends Response {
    uid: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.default.firestore.DocumentSnapshot;
  }
}

export default Profile;
