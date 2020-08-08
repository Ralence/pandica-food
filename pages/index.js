/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Fragment } from "react";
import Gallery from "../src/components/Gallery";
import theme from "../theme";

const index = () => {
  return (
    <Fragment>
      <h1
        sx={{
          fontFamily: theme.fonts.cursive,
          fontSize: 7,
          marginBottom: 0,
          textAlign: "center",
          lineHeight: "1em",
        }}
      >
        Restoran Pandica
      </h1>
      <p sx={{ fontSize: 4, textAlign: "center", margin: 0, color: theme.colors.secondary }}>
        Najbolja kineska hrana u gradu!
      </p>
      <Gallery />
    </Fragment>
  );
};

export default index;
