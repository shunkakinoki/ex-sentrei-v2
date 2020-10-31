export type NamespaceModel = "profile" | "space";

export default interface Namespace {
  uid: string;
  model: NamespaceModel;
}
