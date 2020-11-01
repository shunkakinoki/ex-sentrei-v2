import Article from "@/types/Article";
import Profile from "@/types/Profile";
import Space from "@/types/Space";

export type UserAction = "created" | "updated" | "deleted";

type EditableContent = "articles" | "spaces";

type EditableContentType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in EditableContent]: any;
};

export type ContentCategory = EditableContent;

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Activity {
  interface Fields<T, C extends keyof EditableContentType> {
    action: UserAction;
    before: T | null;
    after: T | null;
    category: C;
    categoryId: string;
    createdByUid: string;
    fullItemPath: string;
    itemPath: string;
    spaceId?: string;
    updatedAt: firebase.default.firestore.FieldValue;
    user: Profile.Response;
    userNotification: string[];
    type?: string;
    value?: number;
  }

  interface Create<T, C extends keyof EditableContentType>
    extends Fields<T, C> {
    action: "created";
    before: null;
    after: T;
  }

  interface Update<T, C extends keyof EditableContentType>
    extends Fields<T, C> {
    action: "updated";
    before: T;
    after: T;
  }

  interface Delete<T, C extends keyof EditableContentType>
    extends Fields<T, C> {
    action: "deleted";
    before: T;
    after: null;
  }

  export type CreateArticle = Create<Article.Response, "articles">;
  export type UpdateArticle = Update<Article.Response, "articles">;
  export type DeleteArticle = Delete<Article.Response, "articles">;
  export type CreateSpace = Create<Space.Response, "spaces">;
  export type UpdateSpace = Update<Space.Response, "spaces">;
  export type DeleteSpace = Delete<Space.Response, "spaces">;

  export type CreateActions = CreateArticle | CreateSpace;

  export type UpdateActions = UpdateArticle | UpdateSpace;

  export type DeleteActions = DeleteArticle | DeleteSpace;

  export type Response = Omit<
    CreateActions | UpdateActions | DeleteActions,
    "updatedAt"
  > & {
    updatedAt: firebase.default.firestore.Timestamp;
  };

  export type Get = Omit<Response, "updatedAt"> & {
    id: string;
    updatedAt: string;
  };

  export interface Snapshot extends Get {
    snap: firebase.default.firestore.DocumentSnapshot;
  }
}

export default Activity;
