export type StatsCollection =
  | "activity"
  | "analytics"
  | "articles"
  | "feedback"
  | "namespaces"
  | "profiles"
  | "spaces"
  | "users";

export const statsCollection: StatsCollection[] = [
  "activity",
  "analytics",
  "feedback",
  "namespaces",
  "profiles",
  "spaces",
  "users",
];

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Stats {
  export type Fields = {
    [x in StatsCollection]?: FirebaseFirestore.FieldValue | number;
  };

  export type NumberFields = {
    [x in StatsCollection]?: number;
  };

  export type Response = Fields;

  export type Update = Partial<Response>;

  export interface Get extends NumberFields {
    id: string;
  }
}

export default Stats;
