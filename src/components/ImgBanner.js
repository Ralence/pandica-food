/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const ImgBanner = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt}
      sx={{
        width: "100%",
        maxWidth: "1200px",
        "@media screen and (max-width: 650px)": {
          height: "350px",
        },
        height: "100%",
        objectFit: "cover",
      }}
    ></img>
  );
};

export default ImgBanner;
