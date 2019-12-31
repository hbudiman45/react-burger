import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button";

const OrderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(ig => {
    return (
      <li key={ig}>
        <span style={{ textTransform: "capitalize" }}>{ig}</span>:{" "}
        {props.ingredients[ig]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with ingredients: </p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button type="Danger" onClick={props.cancel}>
        Cancel
      </Button>
      <Button type="Success" onClick={props.continue}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
