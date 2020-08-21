/** @jsx jsx */
import React, { Component } from "react";

import { jsx, Box, Card, Text, Image, Button, Close, Label, Checkbox } from "theme-ui";

// styled
import StyledModal from "./StyledModal.js";

class Modal extends Component {
  static defaultProps = {
    id: "",
    modalClass: "",
    modalSize: "md",
  };

  state = { fadeType: null };

  background = React.createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.onEscKeyDown, false);
    setTimeout(() => this.setState({ fadeType: "in" }), 0);
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
    const { title } = this.props.item;
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
            }}
          >
            <Close
              onClick={this.handleClick}
              className="close"
              sx={{ width: "40px", minWidth: "40px" }}
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
            {this.props.children}
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
