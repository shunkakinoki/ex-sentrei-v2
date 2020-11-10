/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-types */

import * as snippet from "@segment/snippet";

const betaConfig = "s3wcpbeynnjYoYaoOc8NJ3p5IWuUl7aM";

export const renderSnippet = (): string => {
  const opts = {
    apiKey:
      process.env.VERCEL_GITHUB_COMMIT_REF === "main"
        ? (process.env.NEXT_PUBLIC_SEGMENT_ID as string)
        : betaConfig,
    load: true,
    page: true,
  };

  return snippet.min(opts);
};

export const pageView = (
  category?: string,
  name?: string,
  properties?: Object,
  options?: SegmentAnalytics.SegmentOpts,
  callback?: () => void,
): void => {
  if (typeof window !== "undefined") {
    window.analytics.page(category, name, properties, options, callback);
  }
};

export const identifyUser = (
  userId: string,
  traits?: Object,
  options?: SegmentAnalytics.SegmentOpts,
  callback?: () => void,
): void => {
  if (typeof window !== "undefined") {
    window.analytics.identify(userId, traits, options, callback);
  }
};

export const recordGroup = (
  groupId: string,
  traits?: Object,
  options?: SegmentAnalytics.SegmentOpts,
  callback?: () => void,
): void => {
  if (typeof window !== "undefined") {
    window.analytics.group(groupId, traits, options, callback);
  }
};

export const trackEvent = (
  event: string,
  properties?: Object,
  options?: SegmentAnalytics.SegmentOpts,
  callback?: () => void,
): void => {
  if (typeof window !== "undefined") {
    window.analytics.track(event, properties, options, callback);
  }
};

export const trackForm = (
  elements: JQuery | Element[] | Element,
  event: string | {(elm: Element): string},
  properties?: Object | {(elm: Element): Object},
): void => {
  if (typeof window !== "undefined") {
    window.analytics.trackForm(elements, event, properties);
  }
};

export const trackLink = (
  elements: JQuery | Element[] | Element,
  event: string | {(elm: Element): string},
  properties?: Object | {(elm: Element): Object},
): void => {
  if (typeof window !== "undefined") {
    window.analytics.trackLink(elements, event, properties);
  }
};
