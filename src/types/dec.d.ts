declare module "@segment/snippet";

declare interface Window {
  analytics?: SegmentAnalytics.AnalyticsJS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  google: any;
}
