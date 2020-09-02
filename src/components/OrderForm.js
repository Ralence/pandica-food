/** @jsx jsx */
import React, { useState, useCallback, useEffect } from "react";
import {
  jsx,
  Box,
  Card,
  Text,
  Image,
  Button,
  Flex,
  NavLink,
  Close,
  Label,
  Input,
  Textarea,
  Slider,
  Checkbox,
  Select,
  Radio,
} from "theme-ui";

const OrderForm = () => {
  const [Name, setName] = useState("");

  return (
    <Card
      sx={{
        variant: "containers.card",
        paddingY: "10px",

        margin: 2,
        backgroundColor: "background",
        width: "95%",
        maxWidth: "700px",
        justifyContent: "space-around",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      <Box as="form" onSubmit={(e) => e.preventDefault()}>
        <Flex
          sx={{
            variant: "containers.card",
            paddingY: "10px",

            margin: 2,
            backgroundColor: "background",
            width: "100%",
            maxWidth: "700px",
            justifyContent: "space-around",
            alignItems: "center",
            marginX: "auto",
          }}
        >
          <Text p={2} sx={{ fontSize: 4, fontWeight: "bold" }}>
            PODACI O DOSTAVI
          </Text>
        </Flex>
        <Label htmlFor="username">Ime</Label>
        <Input name="username" id="username" mb={3} />

        <Label htmlFor="username">Kontakt telefon</Label>
        <Input name="username" id="username" mb={3} />

        <Label htmlFor="username">Email adresa</Label>
        <Input name="username" id="username" mb={3} />

        <Label htmlFor="sound">Opština</Label>
        <Select name="sound" id="sound" mb={3}>
          <option>Beep</option>
          <option>Boop</option>
          <option>Blip</option>
        </Select>
        <Label htmlFor="username">Ulica Dostave (pun naziv)</Label>
        <Input name="username" id="username" mb={3} />
        <Label htmlFor="username">Broj</Label>
        <Input name="username" id="username" mb={3} />
        <Label htmlFor="sound">Tip Objekta</Label>
        <Select name="sound" id="sound" mb={3}>
          <option>Stan</option>
          <option>Kuća</option>
        </Select>
        <Label htmlFor="username">Interfon</Label>
        <Input name="username" id="username" mb={3} />
        <Label htmlFor="username">Sprat</Label>
        <Input name="username" id="username" mb={3} />
        <Label htmlFor="comment">Moguće Napomene za Dostavu</Label>
        <Textarea name="comment" id="comment" rows="6" mb={3} />

        <Box>
          <Label mb={3}>
            <Checkbox />
            Remember me
          </Label>
        </Box>

        <Button sx={{ width: "100%", maxWidth: "700px", cursor: "pointer", marginX: "auto" }}>
          Pošalji Porudžbinu
        </Button>
      </Box>
    </Card>
  );
};

export default OrderForm;
