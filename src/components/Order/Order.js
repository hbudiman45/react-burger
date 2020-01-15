import React from "react";

const Order = props => {
  return (
    <div>
      <p>Ingredients: Salad (1)</p>
      <p>
        Price: <strong>USD price</strong>
      </p>
      {console.log("order2", props.order)}
    </div>
  );
};

export default Order;
