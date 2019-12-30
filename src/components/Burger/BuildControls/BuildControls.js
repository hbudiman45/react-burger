import React from "react";
import "./BuildControl.css";
import BuildControl from "./BuildControls/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>{props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map(c => (
        <BuildControl key={c.label} item={c} {...props} />
      ))}
      <button
        className="OrderButton"
        disabled={!props.purchaseable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};
export default BuildControls;
