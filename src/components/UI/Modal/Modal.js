import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop";

const Modal = React.memo(props => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClose} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
});

export default Modal;
