/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import theme from "../../theme";

const MainBrandArea = (props) => {
  const { title, subTitle } = props;
  return (
    <div
      sx={{
        width: "100%",
        maxWidth: "1200px",
        padding: "15px",
        paddingTop: 0,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        sx={{
          fontFamily: theme.fonts.cursive,
          fontSize: 7,
          marginBottom: 0,
          textAlign: "center",
          lineHeight: "1em",
        }}
      >
        {title}
      </h1>
      <p
        sx={{
          fontSize: 4,
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
