import React, { useState } from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button";

const CheckoutSummary = props => {
  return (
    <div>
      <h1>We hope it tastes well</h1>
      <Burger ingredients={props.ingredients} />
      <Button type="Danger" onClick={props.checkoutCancel}>
        Cancel
      </Button>
      <Button type="Success" onClick={props.checkoutContinue}>
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
