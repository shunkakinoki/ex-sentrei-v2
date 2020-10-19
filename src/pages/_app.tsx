import {AppProps} from "next/app";
import "../styles/index.css";

const CustomApp = ({Component, pageProps}: AppProps): JSX.Element => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default CustomApp;
