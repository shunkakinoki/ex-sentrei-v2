/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Metadata from "@/types/Metadata";
import Profile from "@/types/Profile";

export type Pricing = "free" | "paid" | "subscription";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Article {
  export type EditableFields = {
    authors: Profile.Fields[];
    body: string;
    date: Date;
    excerpt?: string;
    image?: string;
    pricing: Pricing;
    slug: string;
    time: number;
    title: string;
    status: "preview" | "published";
    subtitle?: string;
  };

  interface Fields extends EditableFields {
    namespaceId: string;
  }

  export type AdminUpdate = Partial<Fields>;

  export type Response = Fields;

  export interface Create extends Fields, Metadata.Create {}

  export interface Update extends Partial<Response>, Metadata.Update {}

  export interface Get extends Response, Metadata.Get {
    uid: string;
  }

  export interface Snapshot extends Get {
    snap: FirebaseFirestore.DocumentSnapshot;
  }
}

export default Article;
