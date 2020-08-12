/** @jsx jsx */
import { jsx, Box, Card, Text, Image, Button } from "theme-ui";
import React from "react";

import theme from "../../theme";
import styled from "@emotion/styled";

const MenuSection = ({ title, image }) => {
  return (
    <Card
      sx={{
        paddingY: 0,
        variant: "containers.card",
        flex: 1,
        minWidth: "280px",
        margin: "10px",
        backgroundColor: theme.colors.background,
        "@media screen and (max-width: 400px)": {
          marginX: 0,
        },
      }}
    >
      <header
        sx={{
          display: "flex",
          alignItems: "center",
          variant: "styles.header",
          p: 0,
        }}
      >
        <Image src={image} sx={{ height: "70px", width: "70px", objectFit: "cover" }} />
        <Text
          sx={{
            fontSize: 5,
            fontFamily: theme.fonts.cursive,
            margin: 3,
            "@media screen and (max-width: 600px)": { margin: 2 },
          }}
        >
          {title}
        </Text>
        <Button
          sx={{
            marginRight: 3,
            marginLeft: "auto",
            "@media screen and (max-width: 600px)": { marginRight: "3px" },
          }}
        >
          <span
            sx={{
              "@media screen and (max-width: 340px)": { display: "none" },
            }}
          >
            Prikaži Ponudu
          </span>{" "}
          &darr;
        </Button>
      </header>
    </Card>
  );
};

export default MenuSection;
