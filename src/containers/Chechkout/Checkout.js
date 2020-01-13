import React, { useState } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary";

const Checkout = props => {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    meat: 1,
    cheese: 2,
    bacon: 2
  });

  const checkoutCancel = () => {
    props.history.goBack();
  };

  const checkoutContinue = () => {
    props.history.replace("/checkout/contact-data");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    </div>
  );
};

export default Checkout;
