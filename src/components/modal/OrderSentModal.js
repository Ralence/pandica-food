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
  Spinner,
} from "theme-ui";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { moveToHistory } from "../../../store/actions/cart";

// styled
import StyledModal from "./StyledModal.js";

import { addToCart } from "../../../store/actions/cart";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { VscError, VscCheck } from "react-icons/vsc";

class Modal extends Component {
  static defaultProps = {
    id: "",
    modalClass: "",
    modalSize: "md",
  };

  state = {
    fadeType: null,
  };

  background = React.createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.onEscKeyDown, false);
    setTimeout(() => this.setState({ fadeType: "in" }), 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: "out" });
    }
    if (this.props.success && !this.props.loading) {
      setTimeout(() => {
        localStorage.setItem("cart", "");
        this.props.dispatch(moveToHistory());
        this.props.router.push("/#navbar");
      }, 1000);
    }
    if (this.props.success === false && !this.props.loading) {
      setTimeout(() => {
        this.props.router.push("/cart/#navbar");
        this.props.onClose();
      }, 2000);
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
    const { success, loading } = this.props;

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
            height: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading && <Spinner />}
          {!loading && success === false && (
            <Fragment>
              <Text>Žao nam je, došlo je do kreške prilikom slanja porudžbine.</Text>
              <Text>Molimo Vas pokušajte ponovo.</Text>
              <VscError size="40px" color="red" />
            </Fragment>
          )}
          {!loading && success === true && (
            <Fragment>
              <Text>Vaša porudžbina je uspešno prosleđena!</Text>
              <VscCheck size="40px" color="green" />
            </Fragment>
          )}
        </Box>
        <div className={`background`} onMouseDown={this.handleClick} ref={this.background} />
      </StyledModal>
    );
  }
}

const ModalWithRouter = withRouter(Modal);

export default connect()(ModalWithRouter);
