import db from "@/firebase/db";
import {serializeArticle} from "@/serializers/Article";
import Article from "@/types/Article";

export interface ArticleQuery {
  end?: number;
  limit?: number;
  spaceId: string;
  start?: number;
}

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

const articleQuery = ({
  limit = 10,
  end,
  spaceId,
  start,
}: ArticleQuery): firebase.default.firestore.Query<Article.Get> => {
  let ref = db
    .collection("articles")
    .withConverter(articleConverter)
    .orderBy("createdAt", "desc")
    .limit(limit);

  if (spaceId) {
    ref = ref.where("spaceId", "==", spaceId);
  }
  if (start) {
    ref = ref.startAfter(start);
  }
  if (end) {
    ref = ref.endAt(end);
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
