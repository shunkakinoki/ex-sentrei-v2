import db from "@/firebase/db";
import {serializeArticle} from "@/serializers/Article";
import Article from "@/types/Article";

export const articleConverter: firebase.default.firestore.FirestoreDataConverter<Article.Get> = {
  toFirestore(data: Article.Get) {
    return data;
  },
  fromFirestore(
    snapshot: firebase.default.firestore.QueryDocumentSnapshot<
      Article.Response
    >,
  ): Article.Get {
    return serializeArticle(snapshot);
  },
};

export const createArticle = async (article: Article.Create): Promise<void> => {
  await db.collection("aricles").add(article);
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

export const updateArticle = (
  articleId: string,
  article: Article.Update,
): Promise<void> => {
  return db.doc(`articles/${articleId}`).update(article);
};
