export type NamespaceModel = "profiles" | "spaces";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Namespace {
  interface Fields {
    id: string;
    model: NamespaceModel;
  }

  export type Response = Fields;

  export type Create = Fields;

  export type Update = Partial<Fields>;

  export interface Get extends Response {
    uid: string;
  }

  export interface Snapshot extends Get {
    snap: FirebaseFirestore.DocumentSnapshot;
  }
}

export default Namespace;
