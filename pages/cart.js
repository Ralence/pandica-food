/** @jsx jsx */
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
  Checkbox,
  Select,
  Radio,
} from "theme-ui";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uid } from "react-uid";

import MainBrandArea from "../src/components/MainBrandArea";

import ImgBanner from "../src/components/ImgBanner";
import OrderItem from "../src/components/OrderItem";

const cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const router = useRouter();

  return (
    <Fragment>
      <ImgBanner image={"/wok.jpg"} alt="wok full of food" />
      <h1 sx={{ marginX: "20px" }}>Stranice je trenutno u fazi pripreme.</h1>
      <h2 sx={{ marginX: "20px" }}>
        Ukoliko želite da poručite nešto iz našeg menija pozovite jedan od seldećih brojeva
        telefonna:
      </h2>
      <h3>+381 061 14 33 418</h3>
      <h3>+381 061 14 33 419</h3>
      <Flex
        as="nav"
        sx={{
          variant: "containers.card",
          paddingY: "10px",

          margin: 2,
          backgroundColor: "background",
          width: "95%",
          maxWidth: "700px",
          justifyContent: "space-around",
          alignItems: "center",
          textTransform: "uppercase",
        }}
      >
        <NavLink href="#!" active p={2}>
          Trenutni sadržaj korpe
        </NavLink>
        <NavLink href="#!" p={2}>
          Prethodne porudžbine
        </NavLink>
      </Flex>

      {cart.length > 0 ? (
        <Fragment>
          {cart.map((cartItem, index) => {
            return <OrderItem key={uid(cartItem)} cartItem={cartItem} />;
          })}
          <Button sx={{ width: "95%", maxWidth: "700px", cursor: "pointer" }}>Poruči!</Button>
        </Fragment>
      ) : (
        <Card
          sx={{
            variant: "containers.card",
            paddingY: "10px",
            paddingTop: 0,
            margin: 2,
            backgroundColor: "background",
            width: "95%",
            maxWidth: "700px",
          }}
        >
          <div
            className="box-header"
            sx={{
              backgroundImage: "url(/pandicaBanner.jpg)",
              backgroundPosition: "center",
              height: "90px",
              justifyContent: "flex-end",
            }}
          ></div>
          <div className="box-content" sx={{ paddingTop: 0 }}>
            <Text
              sx={{
                fontSize: 5,
                fontWeight: "bold",
                color: "gray",
                textAlign: "center",
                marginY: 5,
              }}
            >
              Vaša korpa je prazna!
            </Text>

            <div className="box-footer">
              <Button
                onClick={() => {
                  router.push("/menu");
                }}
                className="close"
                sx={{ margin: "5px", width: "100%", cursor: "pointer" }}
              >
                Dopuni Korpu!
              </Button>
            </div>
          </div>
        </Card>
      )}
    </Fragment>
  );
};

export default cart;
