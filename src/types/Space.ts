/* eslint-disable @typescript-eslint/no-namespace */

import Social from "@/types/Social";

declare namespace Space {
  export type EditableFields = {
    bio: string | null;
    name: string;
    image: string | null;
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
    snap: FirebaseFirestore.DocumentSnapshot;
  }
}

export default Space;
