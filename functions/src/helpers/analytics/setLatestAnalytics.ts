import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Actions from "@/types/Actions";
import Analytics from "@/types/Analytics";
import Metrics from "@/types/Metrics";
import Stats from "@/types/Stats";

const timestamp = admin.firestore.FieldValue.serverTimestamp();

/**
 * Set latest users on update
 */
const setLatestAnalytics = (
  adminId: string,
  model: Analytics.Models,
  change: functions.Change<FirebaseFirestore.DocumentSnapshot>,
): Analytics.Update | false => {
  let analyticsData;

  const initialData = {
    model,
    period: "latest",
    updatedAt: timestamp,
  };

  switch (adminId) {
    case "actions": {
      const actionsData = change.after.data() as Actions.Response;
      analyticsData = <Analytics.Update>{
        ...initialData,
        actions: actionsData,
      };
      return analyticsData;
    }
    case "metrics": {
      const metricsData = change.after.data() as Metrics.Response;
      analyticsData = <Analytics.Update>{
        ...initialData,
        metrics: metricsData,
      };
      return analyticsData;
    }
    case "stats": {
      const statsData = change.after.data() as Stats.Response;
      analyticsData = <Analytics.Update>{
        ...initialData,
        stats: statsData,
      };
      return analyticsData;
    }
    default:
      return false;
  }
};

export default setLatestAnalytics;
