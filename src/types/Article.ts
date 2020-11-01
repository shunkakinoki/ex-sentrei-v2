/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Metadata from "@/types/Metadata";

export type Pricing = "free" | "paid" | "subscription";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Article {
  export type EditableFields = {
    authorUids: string[];
    body: string;
    excerpt?: string;
    image?: string;
    pricing: Pricing;
    time: number;
    title: string;
    status: "preview" | "published";
    subtitle?: string;
  };

  interface Fields extends EditableFields {
    nameslugId: string;
    spaceId: string;
  }

  export type AdminUpdate = Partial<Fields>;

  export interface Response extends Fields, Metadata.Response {}

  export interface Create extends Fields, Metadata.Create {}

  export interface Update extends Partial<EditableFields>, Metadata.Update {}

  export interface Get extends Fields, Metadata.Get {
    uid: string;
  }

  export interface Snapshot extends Get {
    snap: FirebaseFirestore.DocumentSnapshot;
  }
}

export default Article;
