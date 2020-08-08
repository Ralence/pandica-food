/** @jsx jsx */
import { jsx } from "theme-ui";

import Head from "next/head";
import AppBar from "../src/components/AppBar";
import TopBar from "../src/components/AppTop";

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

  background: #eee;
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
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
        </Head>
        <TopBar />
        <AppBar />
        <Component {...pageProps} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default MyApp;
