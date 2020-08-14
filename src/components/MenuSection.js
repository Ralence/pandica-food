/** @jsx jsx */
import { jsx, Box, Card, Text, Image, Button, Label, Checkbox } from "theme-ui";
import React, { useState, Fragment } from "react";
import MenuItem from "./MenuItem";

import theme from "../../theme";
import styled from "@emotion/styled";

const MainArea = styled.div`
  width: 100%;
  height: 0;
  min-height: 0;
  transition: all 1s ease-in;
  overflow: hidden;
  border: 1px solid gray;
`;

const MenuSection = ({ title, image }) => {
  const [expand, setExpand] = useState(false);
  const menuItem = {
    title: "Item one",
    description: "This is the first menu item created for Pandica",
    extras: ["item one", "item two", "item three"],
    imageURl: "/soup.jpg",
  };
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
        ".expand": {
          minHeight: `${5 * 75}px`,
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
            cursor: "pointer",
            "@media screen and (max-width: 600px)": { marginRight: "3px" },
          }}
          onClick={() => setExpand(!expand)}
        >
          {!expand ? (
            <Fragment>
              <span
                sx={{
                  "@media screen and (max-width: 340px)": { display: "none" },
                }}
              >
                Prikaži Ponudu
              </span>{" "}
              &darr;
            </Fragment>
          ) : (
            <span>&uarr;</span>
          )}
        </Button>
      </header>
      <MainArea
        className={expand ? "expand" : ""}
        sx={{
          paddingTop: expand ? 2 : 0,
        }}
      >
        <MenuItem />
      </MainArea>
    </Card>
  );
};

export default MenuSection;