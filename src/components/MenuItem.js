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
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        src="/soup.jpg"
        sx={{ height: "60px", width: "60px", objectFit: "cover", borderRadius: "50%" }}
      />
      <Text sx={{ fontSize: 3, fontWeight: "bold", color: theme.colors.secondary }}>
        {menuItem.title}
      </Text>
      <Box
        sx={{
          marginX: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Label>
          Option one
          <Checkbox defaultChecked={false} />
        </Label>
        <Label>
          Option two
          <Checkbox defaultChecked={false} />
        </Label>
        <Label>
          Option three
          <Checkbox defaultChecked={false} />
        </Label>
      </Box>
    </Box>
  );
};

export default MenuItem;
