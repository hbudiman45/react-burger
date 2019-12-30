import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div>Menu</div>
      {/* <div>Logo</div> */}
      <Logo />
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;
