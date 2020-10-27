/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/jsx-props-no-spreading */

import {AppProps} from "next/app";
import dynamic from "next/dynamic";
import {RecoilRoot} from "recoil";
import {SWRConfig} from "swr";

import SeoRoot from "@/components/SeoRoot";
import "@/styles/index.css";
import "@/styles/nprogress.css";
import "@/utils/nprogress";

const AppRoot = dynamic(() => import("@/components/AppRoot"), {
  ssr: false,
});

const GlobalSnackbar = dynamic(() => import("@/components/GlobalAlert"), {
  ssr: false,
});

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
          <AppRoot>
            <GlobalSnackbar />
            <Component {...pageProps} />
          </AppRoot>
        </SWRConfig>
      </RecoilRoot>
    </>
  );
};

export default CustomApp;
