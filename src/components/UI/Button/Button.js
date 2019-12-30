import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = props => {
  let buttonType = `Button ${props.type}`;
  return (
    <button className={buttonType} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.prototype = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired
};

Button.defaultProps = {
  type: "Success"
};

export default Button;
