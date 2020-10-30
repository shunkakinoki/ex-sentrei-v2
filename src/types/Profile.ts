/* eslint-disable @typescript-eslint/no-namespace */

export interface SocialLinks {
  facebook?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
  website?: string;
}

declare namespace Profile {
  export type EditableFields = {
    bio: string | null;
    name: string;
    image: string | null;
    social?: SocialLinks;
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

export default Profile;
