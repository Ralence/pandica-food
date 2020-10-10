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
import { useSelector, useDispatch } from "react-redux";
import OrderSentModal from "./modal/OrderSentModal";
import { Fragment } from "react";

const OrderForm = () => {
  const { register, control, handleSubmit, watch, errors } = useForm();

  const order = useSelector((state) => state.cart);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setLoading(true);
    setShowModal(true);
    try {
      const response = await fetch(`/api/order/`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ delivery_info: data, order: order }), // body data type must match "Content-Type" header
      });

      const result = await response.json();

      if (result.success) {
        setLoading(false);
        setOrderSuccess(true);
      } else {
        setLoading(false);
        setOrderSuccess(false);
      }

      console.log("ordered", result); // parses JSON response into native JavaScript objects
    } catch (error) {
      setLoading(false);
      setOrderSuccess(false);
    }
  };

  return (
    <Fragment>
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

          <Label htmlFor="opstina">Opština</Label>
          <Controller as={Select} name="opstina" control={control} defaultValue="Rakovica" required>
            <option>Rakovica</option>
            <option>Čukarica</option>
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
          <Controller
            as={Textarea}
            name="notes"
            rows="6"
            mb={3}
            control={control}
            defaultValue=""
          />

          <Button sx={{ width: "100%", maxWidth: "700px", cursor: "pointer", marginX: "auto" }}>
            Pošalji Porudžbinu
          </Button>
        </Box>
      </Card>
      {showModal && (
        <OrderSentModal
          onClose={() => setShowModal(false)}
          loading={loading}
          success={orderSuccess}
        />
      )}
    </Fragment>
  );
};

export default OrderForm;
