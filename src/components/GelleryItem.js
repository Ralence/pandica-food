/** @jsx jsx */
import { jsx, Grid, Text, Card, Image } from "theme-ui";
import React from "react";

const GelleryItem = ({ image }) => {
  return (
    <Card
      sx={{
        variant: "containers.card",
        maxWidth: "350px",
        minWidth: "250px",
        justifyContent: "center",
        margin: "10px",
        padding: 0,
        backgroundColor: "background",
        position: "relative",
        "@media screen and (max-width: 500px)": {
          maxWidth: "400px",
        },
      }}
    >
      <Image
        src={image.thumbnailUrl}
        sx={{
          ":hover": {
            filter: "brightness(50%)",
          },
        }}
      />
      <Text
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          margin: 0,
          padding: 3,
          color: "background",
          fontSize: 2,
          fontWeight: "bold",
          width: "100%",
          backgroundColor: "hsl(10,20%,50%, 0.7)",
        }}
      >
        {image.caption.split("#")[0]}
      </Text>
    </Card>
  );
};

export default GelleryItem;
