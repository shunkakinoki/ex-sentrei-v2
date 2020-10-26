/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/jsx-props-no-spreading */

import {AppProps} from "next/app";
import {RecoilRoot} from "recoil";
import {SWRConfig} from "swr";

import GlobalSnackbar from "@/components/GlobalAlert";
import SeoRoot from "@/components/SeoRoot";
import "@/styles/index.css";
import "@/styles/nprogress.css";
import "@/utils/nprogress";

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
          <GlobalSnackbar />
          <Component {...pageProps} />
        </SWRConfig>
      </RecoilRoot>
    </>
  );
};

export default CustomApp;
