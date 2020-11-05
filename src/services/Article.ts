import db from "@/firebase/db";
import {serializeArticle} from "@/serializers/Article";
import Article, {ArticleQuery} from "@/types/Article";

export const articleConverter: firebase.default.firestore.FirestoreDataConverter<Article.Get> = {
  fromFirestore(
    snapshot: firebase.default.firestore.QueryDocumentSnapshot<
      Article.Response
    >,
  ): Article.Get {
    return serializeArticle(snapshot);
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
}: ArticleQuery): firebase.default.firestore.Query<Article.Get> => {
  let ref = db
    .collection("articles")
    .withConverter(articleConverter)
    .orderBy("spaceNum", "desc")
    .limit(limit);

  if (spaceId) {
    ref = ref.where("spaceId", "==", spaceId);
  }
  if (status) {
    ref = ref.where("status", "==", status).orderBy("createdAt", "desc");
  }
  if (start) {
    ref = ref.where("spaceNum", ">=", start);
  }
  if (end) {
    ref = ref.where("spaceNum", "<", end);
  }

  return ref;
};

export const createArticle = async (article: Article.Create): Promise<void> => {
  await db.collection("articles").add(article);
};

export const getArticle = async (
  articleId: string,
): Promise<Article.Get | null> => {
  const snap = await db
    .doc(`articles/${articleId}`)
    .withConverter(articleConverter)
    .get();

  return snap.data() || null;
};

export const getArticleLive = (
  articleId: string,
  onSnapshot: (snap: Article.Get | null) => void,
): firebase.default.Unsubscribe => {
  return db
    .doc(`articles/${articleId}`)
    .withConverter(articleConverter)
    .onSnapshot(snap => {
      onSnapshot(snap.data() || null);
    });
};

export const getArticles = async (
  query: ArticleQuery,
): Promise<Article.Get[]> => {
  const snap = await articleQuery(query).get();
  return snap.docs.map(doc => doc.data());
};

export const updateArticle = (
  articleId: string,
  article: Article.Update,
): Promise<void> => {
  return db.doc(`articles/${articleId}`).update(article);
};
