import adminDb from "@/firebaseAdmin/db";
import {serializeAdminArticle} from "@/serializers/Article";
import Article from "@/types/Article";

export interface ArticleQuery {
  end?: number;
  limit?: number;
  spaceId: string;
  start?: number;
}

export const articleAdminConverter: FirebaseFirestore.FirestoreDataConverter<Article.Get> = {
  fromFirestore(
    snapshot: FirebaseFirestore.QueryDocumentSnapshot<Article.Response>,
  ): Article.Get {
    return serializeAdminArticle(snapshot);
  },
  toFirestore(data: Article.Get) {
    return data;
  },
};

export const getAdminArticle = async (
  articleId: string,
): Promise<Article.Get | null> => {
  const snap = await adminDb
    .doc(`articles/${articleId}`)
    .withConverter(articleAdminConverter)
    .get();

  return snap.data() || null;
};
