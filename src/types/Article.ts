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

  export type Update = Partial<Response>;

  export interface Get extends Response {
    uid: string;
  }

  export interface Snapshot extends Get {
    snap: FirebaseFirestore.DocumentSnapshot;
  }
}

export default Article;
