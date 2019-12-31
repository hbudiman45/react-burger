import React from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar";
import "./Layout.css";
import SideDrawer from "../../components/Navigation/SideDrawer";

const Layout = props => {
  return (
    <Aux className="Content">
      {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
      <Toolbar />
      <SideDrawer />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
