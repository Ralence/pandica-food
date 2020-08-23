/** @jsx jsx */
import React, { Component, Fragment } from "react";
import theme from "../../../theme";
import { jsx, Box, Card, Text, Image, Button, Close, Label, Checkbox } from "theme-ui";

// styled
import StyledModal from "./StyledModal.js";

class Modal extends Component {
  static defaultProps = {
    id: "",
    modalClass: "",
    modalSize: "md",
  };

  state = { fadeType: null, totalPrice: 0 };

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

  render() {
    const { title, price, prices } = this.props.item;
    const { section } = this.props;
    const { totalPrice } = this.state;

    return (
      <StyledModal
        id={this.props.id}
        className={`wrapper fade-${this.state.fadeType} ${this.props.modalClass}`}
        sx={{ width: "100%", maxWidth: "100%" }}
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
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {price && price.standard && !price.small && (
                <Fragment>
                  <Text sx={{ fontWeight: "bold", color: "gray" }}>Cena</Text>
                  <Text sx={{ fontWeight: "bold", color: "secondary" }}>{price.standard}</Text>
                </Fragment>
              )}
            </div>
            <Text sx={{ fontWeight: "bold", color: "gray" }}>
              Ukupno: <span sx={{ fontWeight: "bold", color: "secondary" }}>{totalPrice}din</span>
            </Text>
          </div>

          <div className="box-footer">
            <Button onClick={() => {}} className="close" sx={{ margin: "5px" }}>
              U korpu
            </Button>
          </div>
        </Box>
        <div className={`background`} onMouseDown={this.handleClick} ref={this.background} />
      </StyledModal>
    );
  }
}

export default Modal;
