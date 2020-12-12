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
import React, { Fragment, useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uid } from "react-uid";

import MainBrandArea from "../src/components/MainBrandArea";

import ImgBanner from "../src/components/ImgBanner";
import OrderItem from "../src/components/OrderItem";
import OrderForm from "../src/components/OrderForm";

const cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { history } = useSelector((state) => state.cart);
  console.log("CART", cart);
  console.log("HISTORY", history);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const router = useRouter();

  const calculateTotal = useCallback(() => {
    const sum = cart.reduce((acc, item) => acc + parseInt(item.totalPrice), 0);
    setTotalPrice(sum);
  }, [cart]);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <Fragment>
      <ImgBanner image={"/wok.jpg"} alt="wok full of food" />
      <MainBrandArea title="Korpa" />
      <Flex
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
        <Text
          p={2}
          sx={{
            fontSize: 4,
            fontWeight: "bold",
            "@media screen and (max-width: 450px)": {
              fontSize: 3,
            },
          }}
        >
          Trenutni sadržaj korpe
        </Text>
        {/* 
       TODO
       <Button
          onClick={() => router.push("/history")}
          sx={{
            margin: "5px",
            alignSelf: "flex-end",
            marginLeft: "auto",
            marginRight: "10px",
            backgroundColor: "muted",
            color: "gray",
            fontWeight: "bold",
            "@media screen and (max-width: 450px)": {
              alignSelf: "center",
              margin: "auto",
              marginY: 1,
              width: "100%",
            },
          }}
        >
          Zadnja porudžbina
        </Button> */}
      </Flex>

      {cart.length > 0 ? (
        <Fragment>
          {cart.map((cartItem, index) => {
            return <OrderItem key={uid(cartItem)} cartItem={cartItem} />;
          })}
          <Flex
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
            <Text p={2} sx={{ fontSize: 4, fontWeight: "bold" }}>
              Ukupna cena:
            </Text>
            <Text
              p={2}
              sx={{ fontSize: 4, fontWeight: "bold", color: "primary", textTransform: "lowercase" }}
            >
              {totalPrice}din
            </Text>
          </Flex>
          {totalPrice < 500 && (
            <Flex
              sx={{
                flexDirection: "column",
                variant: "containers.card",
                paddingY: "10px",
                textAlign: "center",
                margin: 2,
                backgroundColor: "background",
                width: "100%",
                maxWidth: "700px",
                justifyContent: "space-around",
                alignItems: "center",
                marginX: "auto",
              }}
            >
              <Text sx={{ color: "primary", fontWeight: "bold" }}>
                Minimalna vrednost porudžbine za dostavu iznosu 500din.
              </Text>
              <Text sx={{ color: "primary", fontWeight: "bold" }}>
                Molimo vas da dopunite vašu porudžbinu.
              </Text>
            </Flex>
          )}
          <Button
            onClick={() => {
              router.push("/menu");
            }}
            className="close"
            sx={{
              margin: "5px",
              width: "100%",
              backgroundColor: "gray",
              width: "95%",
              maxWidth: "700px",
              cursor: "pointer",
            }}
          >
            Dopuni Korpu!
          </Button>
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
                sx={{ margin: "5px", width: "100%", cursor: "pointer", backgroundColor: "gray" }}
              >
                Dopuni Korpu!
              </Button>
            </div>
          </div>
        </Card>
      )}
      {cart.length > 0 && totalPrice > 499 && <OrderForm />}
    </Fragment>
  );
};

export default cart;
