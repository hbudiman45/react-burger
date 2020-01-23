import React, { useState, useEffect } from "react";
import Order from "../../components/Order/Order";
import BaseService from "../../services/BaseServices";
import { message, Row, Col } from "antd";
import { isEmpty } from "lodash";

const Orders = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      await BaseService.get("/orders.json")
        .then(res => {
          if (res.status === 200) {
            setOrders(Object.values(res.data));
          }
        })
        .catch(err => message.error("Network Error"));
      setIsLoading(false);
    };
    fetchOrders();
  }, []);
  const renderOrder = () =>
    !isEmpty(orders) &&
    orders.map(order => (
      <Col key={order.price} span={8}>
        <Order order={order} />
      </Col>
    ));
  return (
    <>
      {isLoading ? <h1>Loading..</h1> : null}
      <Row gutter={16}>
        {isEmpty(orders) ? <h3>No order yet</h3> : renderOrder()}
      </Row>
    </>
  );
};

export default Orders;
