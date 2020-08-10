/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import theme from "../../theme";
import { Flex, Card, Image, Text, Button } from "theme-ui";

const Recommend = () => {
  return (
    <div sx={{ width: "100%", maxWidth: "1200px", bg: theme.colors.background }}>
      <h1
        sx={{
          fontFamily: theme.fonts.cursive,
          fontSize: 6,
          marginBottom: 0,
          textAlign: "center",
          lineHeight: "1em",
        }}
      >
        Naša Preporuka
      </h1>

      <Flex sx={{ m: "30px", justifyContent: "space-around", flexWrap: "wrap" }}>
        <Card
          sx={{
            variant: "containers.card",
            flex: 1,
            width: "300px",
            minWidth: "200px",
            margin: "10px",
          }}
        >
          <Image src="/wok.jpg" />
          <Text>Card</Text>
          <Button sx={{ display: "block", my: "5px", bg: theme.colors.gray }}>U korpu</Button>
          <Button sx={{ display: "block", my: "5px" }}>Poručitr odmah</Button>
        </Card>
        <Card
          sx={{
            variant: "containers.card",
            flex: 1,
            width: "300px",
            minWidth: "200px",
            margin: "10px",
          }}
        >
          <Image src="/wok.jpg" />
          <Text>Card</Text>
          <Button sx={{ display: "block", my: "5px", bg: theme.colors.gray }}>U korpu</Button>
          <Button sx={{ display: "block", my: "5px" }}>Poručitr odmah</Button>
        </Card>
        <Card
          sx={{
            variant: "containers.card",
            flex: 1,
            width: "300px",
            minWidth: "200px",
            margin: "10px",
          }}
        >
          <Image src="/wok.jpg" />
          <Text>Card</Text>
          <Button sx={{ display: "block", my: "5px", bg: theme.colors.gray }}>U korpu</Button>
          <Button sx={{ display: "block", my: "5px" }}>Poručitr odmah</Button>
        </Card>
      </Flex>
    </div>
  );
};

export default Recommend;
