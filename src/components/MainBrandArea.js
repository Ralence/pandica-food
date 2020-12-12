/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import theme from "../../theme";

const MainBrandArea = (props) => {
  const { title, subTitle } = props;
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
        minHeight: "400px",
        "@media screen and (max-width: 700px)": {
          height: "fit-content",
          minHeight: "unset",
          paddingBottom: 2,
        },
        padding: 4,
        paddingY: 4,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        sx={{
          fontFamily: theme.fonts.cursive,
          fontSize: 6,
          marginTop: 4,
          textAlign: "center",
          lineHeight: "1em",
          "@media screen and (max-width: 700px)": {
            fontSize: 6,
          },
        }}
      >
        {title}
      </h1>
      <p
        sx={{
          fontSize: 3,
          fontWeight: 700,
          textAlign: "center",
          margin: 0,
          marginTop: "1em",
          color: theme.colors.secondary,
        }}
      >
        {subTitle}
      </p>
      {props.children}
    </div>
  );
};

export default MainBrandArea;
