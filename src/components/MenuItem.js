/** @jsx jsx */
import { jsx, Box, Card, Text, Image, Button, Label, Checkbox } from "theme-ui";
import React, { useState } from "react";

import theme from "../../theme";
import styled from "@emotion/styled";

const MenuItem = () => {
  const menuItem = {
    title: "Item one",
    description: "This is the first menu item created for Pandica",
    extras: ["item one", "item two", "item three"],
    imageURl: "/soup.jpg",
  };

  return (
    <Box
      sx={{
        marginX: 3,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          m: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/soup.jpg"
          sx={{ height: "50px", width: "50px", objectFit: "cover", borderRadius: "50%" }}
        />
        <Text
          sx={{ fontSize: 3, fontWeight: "bold", color: theme.colors.secondary, marginLeft: 1 }}
        >
          {menuItem.title}
        </Text>
      </Box>

      <Box
        sx={{
          marginX: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "auto",
        }}
      >
        <Text sx={{ fontSize: 2, fontWeight: "bold", color: theme.colors.gray, m: 1 }}>
          Standard: <span sx={{ color: theme.colors.secondary }}>400Din</span>
        </Text>
        <Text sx={{ fontSize: 2, fontWeight: "bold", color: theme.colors.gray, m: 1 }}>
          Mala: <span sx={{ color: theme.colors.secondary }}>200Din</span>
        </Text>
      </Box>

      <Button sx={{ marginLeft: "auto" }}>Dodaj u korpu</Button>
    </Box>
  );
};

export default MenuItem;
