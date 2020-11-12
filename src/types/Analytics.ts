import Actions from "@/types/Actions";
import Metrics from "@/types/Metrics";
import Stats from "@/types/Stats";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Analytics {
  export type Models = "root" | "article" | "space" | "user";
  export type Period = "latest" | "hour" | "day" | "week";

  interface InitialFields {
    model: Models;
    period: Period;
  }

  interface Fields extends InitialFields {
    actions?: Actions.NumberFields;
    metrics?: Metrics.NumberFields;
    stats?: Stats.NumberFields;
  }

  export interface Create extends Fields {
    updatedAt: firebase.default.firestore.FieldValue;
  }

  export interface Response extends Fields {
    updatedAt: firebase.default.firestore.Timestamp;
  }

  export interface Update extends Fields {
    updatedAt: firebase.default.firestore.FieldValue;
  }

  export interface Get extends Fields {
    id: string;
    updatedAt: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.default.firestore.DocumentSnapshot;
  }
}

export default Analytics;
