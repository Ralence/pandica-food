import Head from "next/head";
import AppBar from "../src/components/AppBar";
import TopBar from "../src/components/AppTop";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Pandica Fast Food</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <TopBar />
      <AppBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
