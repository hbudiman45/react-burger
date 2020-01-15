import React, { useState, useEffect } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData.js/ContactData";

const Checkout = props => {
  const [ingredients, setIngredients] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const checkoutCancel = () => {
    props.history.goBack();
  };

  const checkoutContinue = () => {
    props.history.replace("/checkout/contact-data");
  };

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const newIngredients = {};
    let price = 0;
    for (let param of query.entries()) {
      // ['salad', 1]
      // console.log(param);
      if (param[0] === "price") {
        price = param[1];
      } else {
        newIngredients[param[0]] = +param[1];
      }
      console.log(newIngredients);
    }
    // console.log(query.toString());
    setIngredients(newIngredients);
    setTotalPrice(price);
  }, []);

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
      <Route
        path={props.match.url + "/contact-data"}
        render={props => (
          <ContactData
            {...props}
            ingredients={ingredients}
            totalPrice={totalPrice}
          />
        )}
      />
    </div>
  );
};

export default Checkout;
