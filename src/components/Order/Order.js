import React from "react";
import { Card } from "antd";

const Order = props => {
  const { order } = props;
  const { ingredients } = order;
  // console.log(Object.keys(ingredients));
  return (
    <Card style={{ width: "100%" }}>
      <p>
        <strong>Ingredients :</strong>
      </p>
      <ul>
        {Object.keys(ingredients).map(ing => (
          <li key={ing}>
            {ing}: {ingredients[ing]}
          </li>
        ))}
      </ul>
      <p>
        Price: <strong>USD {order.price}</strong>
      </p>
    </Card>
  );
};

export default Order;
