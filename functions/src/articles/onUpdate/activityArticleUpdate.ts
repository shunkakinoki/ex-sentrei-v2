/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import {isEqual, pick} from "lodash";

import Activity from "@/types/Activity";
import Article from "@/types/Article";

const db = admin.firestore();

/**
 * Create article activity on update
 */
const activityArticleUpdate = functions.firestore
  .document("articles/{articleId}")
  .onUpdate(async (change, context) => {
    const {articleId} = context.params;

    const before = change.before.data() as Article.Response;
    const after = change.after.data() as Article.Response;
    const fieldsToTrack = ["description", "name", "photo"];
    const beforeChanges = pick(before, fieldsToTrack);
    const afterChanges = pick(after, fieldsToTrack);
    const noChanges = isEqual(beforeChanges, afterChanges);

    if (noChanges) {
      return false;
    }

    const activity: Activity.UpdateArticle = {
      action: "updated",
      after,
      before,
      category: "articles",
      categoryId: articleId,
      createdByUid: after.updatedByUid,
      fullItemPath: `articles/${articleId as string}`,
      itemPath: `articles/${articleId as string}`,
      spaceId: after.spaceId,
      updatedAt: after.updatedAt,
      user: after.updatedBy,
      userId: after.updatedByUid,
      userNotification: [],
    };

    return db.collection("activity").add(activity);
  });

export default activityArticleUpdate;
