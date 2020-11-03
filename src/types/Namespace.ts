export type NamespaceModel = "profiles" | "spaces";

export default interface Namespace {
  model: NamespaceModel;
  uid: string;
}
