/* eslint-disable @typescript-eslint/no-explicit-any */

import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import * as React from "react";

import {renderSnippet} from "@/utils/segment";

export default class CustomDocument extends NextDocument {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {...initialProps};
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line react/no-danger */}
          <script dangerouslySetInnerHTML={{__html: renderSnippet()}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
