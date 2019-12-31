import React from "react";
import Logo from "../../Logo";
import NavigationItems from "../NavitagionItems";
import "./SideDrawer.css";

const SideDrawer = () => {
  // ...
  return (
    <div className="SideDrawer">
      <Logo height="11%" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
