/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Metadata from "@/types/Metadata";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Feedback {
  export type Emoji = 1 | 2 | 3 | null;

  interface EditableFields {
    description?: string;
    emoji?: Emoji;
  }

  type Fields = EditableFields;

  export interface Response extends Fields, Metadata.Response {}

  export interface Create extends Fields, Metadata.Create {}

  export interface Get extends Fields, Metadata.Get {
    id: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.default.firestore.DocumentSnapshot;
  }
}

export default Feedback;
