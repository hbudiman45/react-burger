import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo";
import NavigationItems from "../NavitagionItems";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div>Menu</div>
      {/* <div>Logo</div> */}
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
