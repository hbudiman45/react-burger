import React, { useState, useEffect } from "react";
import Order from "../../components/Order/Order";
import BaseService from "../../services/BaseServices";
import { message } from "antd";

const Orders = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState({});
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    const fetchOrders = () => {
      setIsLoading(true);
      BaseService.get("/orders.json")
        .then(res => {
          if (res.status === 200) {
            // console.log("data", res.data);
            setOrders(Object.values(res.data));
          }
        })
        .catch(err => message.error("Network Error"));
      setIsLoading(false);
    };
    fetchOrders();
  }, []);
  return (
    <>
      <Order />
      {console.log("order", orders)}
      {isLoading ? <h1>Loading..</h1> : null}
    </>
  );
};

export default Orders;
