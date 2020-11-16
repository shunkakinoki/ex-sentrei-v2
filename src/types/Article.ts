/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Metadata from "@/types/Metadata";

export interface ArticleQuery {
  end?: number;
  limit?: number;
  spaceId: string;
  start?: number;
  startAfter?: firebase.default.firestore.DocumentSnapshot;
  status?: string;
}

export type Pricing = "free" | "paid" | "subscription";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Article {
  export type EditableFields = {
    body: string;
    excerpt?: string;
    image?: string | null;
    pricing: Pricing;
    profileIds: string[];
    status: "preview" | "published";
    subtitle?: string;
    title: string;
  };

  interface Fields extends EditableFields {
    slugId?: string;
    spaceId: string;
    spaceNum?: number;
    time?: number;
  }

  export type AdminUpdate = Partial<Fields>;

  export interface Response extends Fields, Metadata.Response {}

  export interface Create extends Fields, Metadata.Create {}

  export interface Update extends Partial<EditableFields>, Metadata.Update {}

  export interface Get extends Fields, Metadata.Get {
    id: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.default.firestore.DocumentSnapshot;
  }
}

export default Article;
