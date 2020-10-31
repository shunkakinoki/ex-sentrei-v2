export type NamespaceModel = "profiles" | "spaces";

export default interface Namespace {
  uid: string;
  model: NamespaceModel;
}
