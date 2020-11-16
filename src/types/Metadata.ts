import Profile from "@/types/Profile";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Metadata {
  export type Update = {
    updatedAt: firebase.default.firestore.FieldValue;
    updatedBy: Profile.Response;
    updatedById: string;
  };

  export interface Create extends Update {
    createdAt: firebase.default.firestore.FieldValue;
    createdBy: Profile.Response;
    createdById: string;
  }

  export interface Get extends Omit<Response, "createdAt" | "updatedAt"> {
    createdAt: string;
    updatedAt: string;
  }

  export interface Response extends Omit<Create, "createdAt" | "updatedAt"> {
    createdAt: firebase.default.firestore.Timestamp;
    updatedAt: firebase.default.firestore.Timestamp;
  }

  export interface Snapshot extends Get {
    snap: firebase.default.firestore.DocumentSnapshot;
  }
}

export default Metadata;
