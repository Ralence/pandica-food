/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";

import Head from "next/head";
import AppBar from "../src/components/AppBar";
import TopBar from "../src/components/AppTop";
import AppFooter from "../src/components/AppFooter";

import { useDispatch } from "react-redux";
import { setCartFromLocal } from "../store/actions/cart";

import { wrapper } from "../store/index";

import { ThemeProvider } from "theme-ui";

import theme from "../theme";

import styled from "@emotion/styled";

import "../styles/globals.css";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      const localCart = localStorage.getItem("cart");
      let parsed = [];
      if (localCart) {
        parsed = JSON.parse(localCart);
        dispatch(setCartFromLocal(parsed));
        setLoading(false);
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer sx={{ backgroundColor: theme.colors.mainBackground }}>
        <Head>
          <title>Pandica Fast Food</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {/**Add <roboto font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/** Add Caveat font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Courgette&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" type="image/png" href="/pandicaFav.jpg"></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossOrigin=""
          />
          <script
            src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossOrigin=""
          ></script>
        </Head>
        <TopBar />
        <AppBar />
        <Component {...pageProps} />
        <AppFooter />
      </AppContainer>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
