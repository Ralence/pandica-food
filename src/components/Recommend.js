/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import theme from "../../theme";
import { Flex, Card, Image, Text, Button } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const Recommend = () => {
  return (
    <Container sx={{ width: "100%", maxWidth: "1200px", border: "1px solid #0000001f" }}>
      <h1
        sx={{
          fontFamily: theme.fonts.cursive,
          fontSize: 6,
          marginBottom: 0,
          textAlign: "center",
          lineHeight: "1em",
          "@media screen and (max-width: 700px)": { fontSize: 5 },
        }}
      >
        Naša Preporuka
      </h1>

      <Flex sx={{ m: "30px", justifyContent: "space-around", flexWrap: "wrap" }}>
        <Card
          sx={{
            variant: "containers.card",
            flex: 1,
            minWidth: "250px",
            margin: "10px",
            backgroundColor: theme.colors.background,
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
            minWidth: "250px",
            margin: "10px",
            backgroundColor: theme.colors.background,
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
            minWidth: "250px",
            margin: "10px",
            backgroundColor: theme.colors.background,
          }}
        >
          <Image src="/wok.jpg" />
          <Text>Card</Text>
          <Button sx={{ display: "block", my: "5px", bg: theme.colors.gray }}>U korpu</Button>
          <Button sx={{ display: "block", my: "5px" }}>Poručitr odmah</Button>
        </Card>
      </Flex>
    </Container>
  );
};

export default Recommend;
