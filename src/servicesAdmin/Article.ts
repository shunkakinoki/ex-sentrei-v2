import adminDb from "@/firebaseAdmin/db";
import {serializeAdminArticle} from "@/serializers/Article";
import Article, {ArticleQuery} from "@/types/Article";

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

export const articleQuery = ({
  limit = 10,
  end,
  spaceId,
  start,
  status,
}: ArticleQuery): FirebaseFirestore.Query<Article.Get> => {
  let ref = adminDb
    .collection("articles")
    .withConverter(articleAdminConverter)
    .limit(limit);

  if (spaceId) {
    ref = ref.where("spaceId", "==", spaceId);
  }
  if (status) {
    ref = ref.where("status", "==", status).orderBy("createdAt", "desc");
  }
  if (start) {
    ref = ref.where("spaceNum", "<=", start).orderBy("spaceNum", "desc");
  }
  if (end) {
    ref = ref.where("spaceNum", ">", end);
  }

  return ref;
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

export const getAdminArticles = async (
  query: ArticleQuery,
): Promise<Article.Get[]> => {
  const snap = await articleQuery(query).get();
  return snap.docs.map(doc => doc.data());
};
