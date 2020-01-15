import React from "react";
import "./NavigationItems.css";
import { NavLink } from "react-router-dom";
const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <li className="NavigationItem">
        <NavLink to="/" exact>
          Burger Builder
        </NavLink>
        <NavLink to="/orders" exact>
          Orders
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationItems;
