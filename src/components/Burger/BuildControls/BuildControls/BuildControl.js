import React from "react";
import "./BuildControl.css";
const BuildControl = props => {
  const { item } = props;
  return (
    <div className="BuildControl">
      <div className="Label">{item.label}</div>
      <button
        className="Less"
        onClick={() => props.removeIngredient(item.type)}
        disabled={props.disabled[item.type]}
      >
        Less
      </button>
      <button className="More" onClick={() => props.addIngredient(item.type)}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
