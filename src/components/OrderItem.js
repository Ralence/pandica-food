/** @jsx jsx */
import {
  jsx,
  Box,
  Card,
  Text,
  Image,
  Button,
  Close,
  Label,
  Checkbox,
  Select,
  Radio,
} from "theme-ui";
import React, { Fragment } from "react";
import { uid } from "react-uid";

import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/actions/cart";

const OrderItem = ({ cartItem }) => {
  const { orderItem, title, selectedMeat, orderSize, dodaciJelu, totalPrice } = cartItem;
  const dispatch = useDispatch();
  return (
    <Card
      key={uid(title)}
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
        <h2
          className="box-title"
          sx={{
            color: "primary",
            fontWeight: "bolder",
            padding: 1,
            margin: 1,
          }}
        >
          {title}
        </h2>
        <div
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {selectedMeat && <h4 sx={{ textTransform: "capitalize", margin: 1 }}>{selectedMeat}</h4>}
          {orderSize && (
            <h4 sx={{ textTransform: "capitalize", margin: 1 }}>
              {orderSize.name === "small" ? "mala porcija" : "standard porcija"}:{" "}
              {orderSize.price || totalPrice}
              din
            </h4>
          )}
          {dodaciJelu &&
            dodaciJelu.map((dodatak, index) => (
              <h4 key={dodatak.name + index} sx={{ textTransform: "capitalize", margin: 1 }}>
                + {dodatak.name}: {dodatak.cost}din
              </h4>
            ))}
          <Text sx={{ fontWeight: "bold", color: "gray" }}>
            Ukupno: <span sx={{ fontWeight: "bold", color: "secondary" }}>{totalPrice}din</span>
          </Text>
        </div>

        <div className="box-footer" sx={{ display: "flex" }}>
          <Button
            onClick={() => dispatch(removeFromCart(cartItem))}
            className="close"
            sx={{
              margin: "5px",
              alignSelf: "flex-end",
              marginLeft: "auto",
              marginRight: "10px",
              backgroundColor: "muted",
              color: "gray",
              fontWeight: "bold",
            }}
          >
            Izbaci iz korpe
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default OrderItem;
