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
import { useForm, Controller } from "react-hook-form";

const OrderForm = () => {
  const { register, control, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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

        <Label htmlFor="name">Ime</Label>
        <Controller as={Input} name="name" control={control} defaultValue="" required />

        <Label htmlFor="phone">Kontakt telefon</Label>
        <Controller as={Input} name="phone" control={control} defaultValue="" required />

        <Label htmlFor="email">Email adresa</Label>
        <Controller
          type="email"
          as={Input}
          name="email"
          control={control}
          defaultValue=""
          required
        />

        <Label htmlFor="municipality">Opština</Label>
        <Controller
          as={Select}
          name="municipality"
          control={control}
          defaultValue="Rakovica"
          required
        >
          <option>Rakovica</option>
          <option>Boop</option>
          <option>Blip</option>
        </Controller>

        <Label htmlFor="street">Ulica Dostave (pun naziv)</Label>
        <Controller as={Input} name="street" control={control} defaultValue="" required />

        <Label htmlFor="number">Broj</Label>
        <Controller as={Input} name="number" control={control} defaultValue="" required />

        <Label htmlFor="objectType">Tip Objekta</Label>
        <Controller as={Select} name="objectType" control={control} defaultValue="Stan" required>
          <option>Stan</option>
          <option>Kuća</option>
        </Controller>

        <Label htmlFor="interfon">Interfon</Label>
        <Controller as={Input} name="interfon" control={control} defaultValue="" />

        <Label htmlFor="sprat">Sprat</Label>
        <Controller as={Input} name="sprat" control={control} defaultValue="" required />
        <Label htmlFor="notes">Moguće Napomene za Dostavu</Label>
        <Controller as={Textarea} name="notes" rows="6" mb={3} control={control} defaultValue="" />

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
