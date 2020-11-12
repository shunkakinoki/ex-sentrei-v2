export type ActionsCollection =
  | "created_articles"
  | "created_spaces"
  | "updated_articles"
  | "updated_profiles"
  | "updated_spaces"
  | "deleted_articles"
  | "deleted_spaces";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Actions {
  export type Fields = {
    [actions in ActionsCollection]?: FirebaseFirestore.FieldValue | number;
  };

  export type NumberFields = {
    [actions in ActionsCollection]?: number;
  };

  export type Response = Fields;

  export type Update = Partial<Response>;

  export interface Get extends NumberFields {
    id: string;
  }
}

export default Actions;
