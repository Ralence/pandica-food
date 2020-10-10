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

import MainBrandArea from "./MainBrandArea";

import ImgBanner from "./ImgBanner";
import OrderItem from "./OrderItem";
import OrderForm from "./OrderForm";

const cart = () => {
  const { history } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const router = useRouter();

  const calculateTotal = useCallback(() => {
    const sum = history.reduce((acc, item) => acc + parseInt(item.totalPrice), 0);
    setTotalPrice(sum);
  }, [cart]);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <Fragment>
      <Flex
        sx={{
          variant: "containers.card",
          paddingY: "10px",

          margin: 2,
          marginTop: 5,
          backgroundColor: "background",
          width: "95%",
          maxWidth: "700px",
          justifyContent: "space-around",
          alignItems: "center",
          textTransform: "uppercase",
        }}
      >
        <Text p={2} sx={{ fontSize: 3, fontWeight: "bold" }}>
          Sadržaj prethodne porudžbine
        </Text>
        <Button
          onClick={() => router.push("/menu")}
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
          Meni
        </Button>
      </Flex>

      {history.length > 0 ? (
        <Fragment>
          {history.map((historyItem, index) => {
            return JSON.stringify(historyItem);
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
          {/* 
            TODO repeat the order       
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
          </Button> */}
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
            Nova porudžbina
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
              Nemate prethodnih porudžbi!
            </Text>

            <div className="box-footer">
              <Button
                onClick={() => {
                  router.push("/menu");
                }}
                className="close"
                sx={{ margin: "5px", width: "100%", cursor: "pointer", backgroundColor: "gray" }}
              >
                Poruči hranu!
              </Button>
            </div>
          </div>
        </Card>
      )}
    </Fragment>
  );
};

export default cart;
