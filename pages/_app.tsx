/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/jsx-props-no-spreading */

import {AppProps} from "next/app";
import "../src/styles/index.css";
import {RecoilRoot} from "recoil";
import {SWRConfig} from "swr";
import SeoRoot from "@/components/SeoRoot";

const CustomApp = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <SeoRoot />
      <RecoilRoot>
        <SWRConfig
          value={{
            onLoadingSlow: key => {
              console.log(`key:${key}`);
            },
            onSuccess: (data, key) => {
              console.log(`data: ${data}, key: ${key}`);
            },
            onError: (err, key) => {
              console.log(`err: ${err}, key: ${key}`);
            },
            onErrorRetry: (err, key) => {
              console.log(`err: ${err}, key: ${key}`);
            },
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </RecoilRoot>
    </>
  );
};

export default CustomApp;
