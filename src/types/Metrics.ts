/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Metadata from "@/types/Metadata";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Metrics {
  export type Fields = {
    duration?: FirebaseFirestore.FieldValue | number;
    like?: FirebaseFirestore.FieldValue | number;
    view?: FirebaseFirestore.FieldValue | number;
  };

  export type NumberFields = {
    duration?: number;
    like?: number;
    view?: number;
  };

  export type Response = Fields;

  export interface Create extends Partial<Fields>, Metadata.Create {}

  export interface Request extends Fields, Metadata.Get {}

  export type Update = Partial<Response>;

  export interface Get extends NumberFields {
    id: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.default.firestore.DocumentSnapshot;
  }
}

export default Metrics;
