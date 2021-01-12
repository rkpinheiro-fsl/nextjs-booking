import { AppProps } from "next/app";

import "../styles/globals.css";
import "materialize-css/dist/css/materialize.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
