/** @jsx jsx */
import { jsx, Box, Card, Text, Image, Button, Label, Checkbox } from "theme-ui";
import React, { useState } from "react";

import Modal from "./modal/Modal";

import theme from "../../theme";
import styled from "@emotion/styled";

const MenuItem = ({ item, meats, section, dodaci }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginX: 3,
        marginY: 2,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid gray",
        backgroundColor: "background",
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
          sx={{
            fontSize: 3,
            fontWeight: "bold",
            color: theme.colors.secondary,
            marginLeft: 1,
            "@media screen and (max-width: 820px)": {
              width: "200px",
            },
          }}
        >
          {item.title}
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
        {item && item.price && (
          <Text
            sx={{
              fontSize: 2,
              fontWeight: "bold",
              color: theme.colors.gray,
              m: 1,
              marginLeft: "auto",
              minWidth: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <span sx={{ color: theme.colors.secondary }}>
              {item.price.small && item.price.small + "/"}
              {item.price.standard}Din
            </span>
          </Text>
        )}
      </Box>
      {meats && (
        <Box>
          <Text sx={{ color: "text", fontWeight: "bold" }}>
            Piletina: {item.prices.piletina.small}/{item.prices.piletina.standard}
          </Text>
          <Text sx={{ color: "text", fontWeight: "bold" }}>
            Teletina: {item.prices.teletina.small}/{item.prices.teletina.standard}
          </Text>
          <Text sx={{ color: "text", fontWeight: "bold" }}>
            Svinjatina: {item.prices.svinjetina.small}/{item.prices.svinjetina.standard}
          </Text>
        </Box>
      )}

      <Button
        sx={{
          marginLeft: "20px",
          cursor: "pointer",
          "@media screen and (max-width: 650px)": { marginLeft: "auto" },
        }}
        onClick={() => setShowModal(!showModal)}
      >
        Dodaj u korpu
      </Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} item={item} section={section} dodaci={dodaci} />
      )}
    </Box>
  );
};

export default MenuItem;
