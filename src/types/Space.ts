/* eslint-disable @typescript-eslint/no-namespace */

declare namespace Space {
  export type EditableFields = {
    description: string | null;
    title: string;
    image: string | null;
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
