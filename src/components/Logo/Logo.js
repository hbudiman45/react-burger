import React from "react";
import "./Logo.css";
import burderLogo from "../../assets/images/burger-logo.png";

const Logo = props => {
  return (
    <div className="Logo" style={{ height: props.height }}>
      <img src={burderLogo} alt="burger logo" />
    </div>
  );
};

export default Logo;
