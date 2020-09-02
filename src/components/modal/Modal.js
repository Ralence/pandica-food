/** @jsx jsx */
import React, { Component, Fragment } from "react";
import theme from "../../../theme";
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
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { v4 as uuid } from "uuid";

// styled
import StyledModal from "./StyledModal.js";

import { addToCart } from "../../../store/actions/cart";
import { FaRegCaretSquareRight } from "react-icons/fa";

class Modal extends Component {
  static defaultProps = {
    id: "",
    modalClass: "",
    modalSize: "md",
  };

  state = {
    fadeType: null,
    totalPrice: 0,
    selectedMeat: null,
    orderSize: null,
    dodaciJelu: [],
    itemAdded: false,
  };

  background = React.createRef();

  componentDidMount() {
    const { item, section } = this.props;
    window.addEventListener("keydown", this.onEscKeyDown, false);
    setTimeout(() => this.setState({ fadeType: "in" }), 0);
    if (item.price && item.price.standard && !item.price.small) {
      this.setState({ totalPrice: item.price.standard });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: "out" });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscKeyDown, false);
  }

  transitionEnd = (e) => {
    if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;

    if (this.state.fadeType === "out") {
      this.props.onClose();
    }
  };

  onEscKeyDown = (e) => {
    if (e.key !== "Escape") return;
    this.setState({ fadeType: "out" });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ fadeType: "out" });
  };

  addToLocalStorage = (item) => {
    const localSCart = localStorage.getItem("cart");
    let parsed = [];
    if (localSCart) {
      parsed = JSON.parse(localSCart);
    }
    parsed.push(item);
    localStorage.setItem("cart", JSON.stringify(parsed));
  };

  handleAddToCart = () => {
    const { router, dispatch } = this.props;
    const { prices, price } = this.props.item;
    const { totalPrice, selectedMeat, orderSize, dodaciJelu } = this.state;

    if (!totalPrice) {
      alert("Molimo dovršite porudžbinu");
      return;
    }

    const newOrder = {
      orderItem: this.props.item,
      id: uuid(),
      title: this.props.item.title,
      selectedMeat,
      orderSize: {
        name: orderSize,
        price:
          prices && prices[selectedMeat] && prices[selectedMeat][orderSize]
            ? prices[selectedMeat][orderSize]
            : price[orderSize],
      },
      dodaciJelu,
      totalPrice,
    };
    dispatch(addToCart(newOrder));

    this.addToLocalStorage(newOrder);
    this.setState({ itemAdded: true });
  };

  render() {
    const { title, price, prices } = this.props.item;
    const { section, dodaci, dispatch, router } = this.props;
    const { totalPrice, selectedMeat, orderSize, dodaciJelu, itemAdded } = this.state;

    return (
      <StyledModal
        id={this.props.id}
        className={`wrapper fade-${this.state.fadeType} ${this.props.modalClass}`}
        sx={{ width: "100%", maxWidth: "100%", maxHeight: "100%" }}
        role="dialog"
        modalSize={this.props.modalSize}
        onTransitionEnd={this.transitionEnd}
      >
        <Box
          className="box-dialog"
          sx={{
            paddingY: "10px",
            paddingTop: 0,
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
          >
            <Close
              onClick={this.handleClick}
              className="close"
              sx={{
                width: "40px",
                minWidth: "40px",
                alignSelf: "flex-start",
                backgroundColor: "#fff",
                border: `2px solid ${theme.colors.primary}`,
              }}
            ></Close>
          </div>
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
              {price && price.standard && !price.small && (
                <Fragment>
                  <Text sx={{ fontWeight: "bold", color: "gray" }}>
                    Cena:{" "}
                    <span sx={{ fontWeight: "bold", color: "secondary" }}>{price.standard}</span>
                  </Text>
                </Fragment>
              )}
              {prices && (
                <Fragment>
                  <Select
                    defaultValue=""
                    sx={{ width: "200px", marginY: 1 }}
                    onChange={(e) => this.setState({ selectedMeat: e.target.value })}
                    placeholder="Vrsta mesa"
                  >
                    <option value="" sx={{ width: "100%" }}>
                      Odaberite Meso
                    </option>
                    <option value="piletina" sx={{ width: "100%" }}>
                      Piletina
                    </option>
                    <option value="teletina" sx={{ width: "100%" }}>
                      Teletina
                    </option>
                    <option value="svinjetina" sx={{ width: "100%" }}>
                      Svinjetina
                    </option>
                  </Select>
                  {selectedMeat && (
                    <Fragment>
                      <Select
                        defaultValue=""
                        sx={{ width: "200px", marginY: 1 }}
                        onChange={(e) => {
                          const value = e.target.value;
                          this.setState((oldState) => ({
                            ...oldState,
                            orderSize: value,
                            totalPrice: parseInt(prices[selectedMeat][value]),
                          }));
                        }}
                      >
                        <option value="" sx={{ width: "100%" }}>
                          Veličina Porcije
                        </option>
                        <option value="small" sx={{ width: "100%" }}>
                          Mala
                        </option>
                        <option value="standard" sx={{ width: "100%" }}>
                          Standard
                        </option>
                      </Select>
                    </Fragment>
                  )}
                  {selectedMeat && orderSize && (
                    <Fragment>
                      <h4 sx={{ margin: 1 }}>
                        Ukoliko želite možete izabrate maksimalno dva dodatka
                      </h4>
                      <Select
                        defaultValue=""
                        sx={{ width: "200px", marginY: 1 }}
                        onChange={(e) => {
                          const value = parseInt(JSON.parse(e.target.value).price);
                          const name = JSON.parse(e.target.value).title;
                          console.log(e.target.value);
                          this.setState((oldState) => ({
                            ...oldState,
                            dodaciJelu: [...oldState.dodaciJelu, { name, cost: value }],
                            totalPrice: oldState.totalPrice + value,
                          }));
                        }}
                        placeholder="Dodatci"
                      >
                        <option value="" sx={{ width: "100%" }}>
                          Dodaci
                        </option>
                        {dodaci &&
                          dodaci.items.map((item, index) => (
                            <option key={item.title} value={JSON.stringify(item)} name={item.title}>
                              {item.title}: {item.price}din
                            </option>
                          ))}
                      </Select>
                    </Fragment>
                  )}
                  {selectedMeat && orderSize && dodaciJelu.length > 0 && dodaciJelu.length < 3 && (
                    <Select
                      defaultValue=""
                      sx={{ width: "200px", marginY: 1 }}
                      onChange={(e) => {
                        const value = parseInt(JSON.parse(e.target.value).price);
                        const name = JSON.parse(e.target.value).title;
                        console.log(e.target.value);
                        this.setState((oldState) => ({
                          ...oldState,
                          dodaciJelu: [...oldState.dodaciJelu, { name, cost: value }],
                          totalPrice: oldState.totalPrice + value,
                        }));
                      }}
                      placeholder="Dodatci"
                    >
                      <option value="" sx={{ width: "100%" }}>
                        Dodaci
                      </option>
                      {dodaci &&
                        dodaci.items.map((item, index) => (
                          <option key={item.title} value={JSON.stringify(item)} name={item.title}>
                            {item.title}: {item.price}din
                          </option>
                        ))}
                    </Select>
                  )}
                </Fragment>
              )}
            </div>
            {section && (section === "Specijalni meni" || section === "Vegetarijanski meni") && (
              <Fragment>
                <Select
                  defaultValue=""
                  sx={{ width: "200px", marginY: 1 }}
                  onChange={(e) => {
                    const value = e.target.value;
                    this.setState((oldState) => ({
                      ...oldState,
                      orderSize: value,
                      totalPrice: parseInt(price[value]),
                    }));
                  }}
                >
                  <option value="" sx={{ width: "100%" }}>
                    Veličina Porcije
                  </option>
                  <option value="small" sx={{ width: "100%" }}>
                    Mala
                  </option>
                  <option value="standard" sx={{ width: "100%" }}>
                    Standard
                  </option>
                </Select>
                {orderSize && (
                  <Fragment>
                    <h4 sx={{ margin: 1 }}>
                      Ukoliko želite možete izabrate maksimalno dva dodatka
                    </h4>
                    <Select
                      defaultValue=""
                      sx={{ width: "200px", marginY: 1 }}
                      onChange={(e) => {
                        const value = parseInt(JSON.parse(e.target.value).price);
                        const name = JSON.parse(e.target.value).title;
                        console.log(e.target.value);
                        this.setState((oldState) => ({
                          ...oldState,
                          dodaciJelu: [...oldState.dodaciJelu, { name, cost: value }],
                          totalPrice: oldState.totalPrice + value,
                        }));
                      }}
                      placeholder="Dodatci"
                    >
                      <option value="" sx={{ width: "100%" }}>
                        Dodaci
                      </option>
                      {dodaci &&
                        dodaci.items.map((item, index) => (
                          <option key={item.title} value={JSON.stringify(item)} name={item.title}>
                            {item.title}: {item.price}din
                          </option>
                        ))}
                    </Select>
                  </Fragment>
                )}
                {orderSize && dodaciJelu.length > 0 && dodaciJelu.length < 3 && (
                  <Select
                    defaultValue=""
                    sx={{ width: "200px", marginY: 1 }}
                    onChange={(e) => {
                      const value = parseInt(JSON.parse(e.target.value).price);
                      const name = JSON.parse(e.target.value).title;
                      console.log(e.target.value);
                      this.setState((oldState) => ({
                        ...oldState,
                        dodaciJelu: [...oldState.dodaciJelu, { name, cost: value }],
                        totalPrice: oldState.totalPrice + value,
                      }));
                    }}
                    placeholder="Dodatci"
                  >
                    <option value="" sx={{ width: "100%" }}>
                      Dodaci
                    </option>
                    {dodaci &&
                      dodaci.items.map((item, index) => (
                        <option key={item.title} value={JSON.stringify(item)} name={item.title}>
                          {item.title}: {item.price}din
                        </option>
                      ))}
                  </Select>
                )}
              </Fragment>
            )}
            {selectedMeat && (
              <h4 sx={{ textTransform: "capitalize", margin: 1 }}>{selectedMeat}</h4>
            )}
            {orderSize && (
              <h4 sx={{ textTransform: "capitalize", margin: 1 }}>
                {orderSize === "small" ? "mala porcija" : "standard porcija"}:{" "}
                {prices && prices[selectedMeat] && prices[selectedMeat][orderSize]
                  ? prices[selectedMeat][orderSize]
                  : price[orderSize]}
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

          <div
            className="box-footer"
            sx={{
              "@media screen and (max-width: 450px)": {
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            {itemAdded ? (
              <Fragment>
                <Button
                  onClick={() => router.push("/cart")}
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
                  Pogledaj Korpu
                </Button>
                <Button
                  onClick={this.handleClick}
                  sx={{
                    bg: "gray",
                    "@media screen and (max-width: 450px)": {
                      alignSelf: "center",
                      margin: "auto",
                      marginY: 1,
                      width: "100%",
                    },
                  }}
                >
                  Nastavi Kupovinu
                </Button>
              </Fragment>
            ) : (
              <Button
                onClick={() => {
                  this.handleAddToCart();
                }}
                className="close"
                sx={{ margin: "5px" }}
              >
                U korpu
              </Button>
            )}
          </div>
        </Box>
        <div className={`background`} onMouseDown={this.handleClick} ref={this.background} />
      </StyledModal>
    );
  }
}

const ModalWithRouter = withRouter(Modal);

export default connect()(ModalWithRouter);
