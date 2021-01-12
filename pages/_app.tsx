import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";
import "materialize-css/dist/css/materialize.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
