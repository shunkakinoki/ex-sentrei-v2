import * as Sentry from "@sentry/browser";
import {NextPageContext} from "next";
import NextError, {ErrorProps} from "next/error";

import {trackEvent} from "@/utils/segment";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PromiseValue<T extends Promise<any>> = T extends Promise<infer R> ? R : T;

const getInitialProps = async (
  ctx: NextPageContext,
): Promise<
  | ErrorProps
  | {
      hasGetInitialPropsRun: boolean;
      statusCode: number;
      title?: string | undefined;
    }
> => {
  const errorInitialProps = await NextError.getInitialProps(ctx);

  const {res, err, asPath} = ctx;

  if (res?.statusCode === 404) {
    return {statusCode: 404};
  }

  if (err) {
    trackEvent("Exception", {
      description: err.message,
      error: err.name,
      stack: err.stack,
      statusCode: err.statusCode,
    });
    Sentry.captureException(err);
    await Sentry.flush(2000);
    return errorInitialProps;
  }

  trackEvent("Exception", {
    error: "getInitialProps missing data",
    description: `_error.js getInitialProps missing data at path: ${
      asPath ?? ""
    }`,
  });

  return {
    ...errorInitialProps,
    hasGetInitialPropsRun: true,
  };
};

const CustomError = (
  ctx: PromiseValue<ReturnType<typeof getInitialProps>> & NextPageContext,
): JSX.Element => {
  if (
    !("hasGetInitialPropsRun" in ctx && ctx.hasGetInitialPropsRun) &&
    ctx.err
  ) {
    trackEvent("exception", {
      description: ctx.err.message,
      error: ctx.err.name,
      stack: ctx.err.stack,
      statusCode: ctx.err.statusCode,
    });
    Sentry.captureException(ctx.err);
  }

  return <NextError statusCode={ctx.statusCode} />;
};

CustomError.getInitialProps = getInitialProps;

export default CustomError;
