import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar";
import "./Layout.css";

const Layout = props => {
  return (
    <Aux className="Content">
      {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
      <Toolbar />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
