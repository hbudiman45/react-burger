import React, { useState } from "react";
import "./ContactData.css";
import BaseService from "../../../services/BaseServices";
import Spinner from "../../../components/UI/Spinner";
import { Form, Input, Button, Select, message } from "antd";

const ContactData = props => {
  const { Option } = Select;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    street: "",
    postalCode: ""
  });
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getFieldDecorator } = props.form;

  const orderHandler = event => {
    event.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);
        setIsLoading(true);
        const order = {
          ingredients: props.ingredients,
          price: props.totalPrice,
          customer: {
            name: name,
            email: email,
            address: address
          },
          deliveryMethod: deliveryMethod
        };
        BaseService.post("/orders.json", order)
          .then(() => {
            props.history.push("/");
            message.success("Order Collected");
          })
          .catch(() => message.error("Something went wrong"))
          .finally(() => setIsLoading(false));
      } else {
        console.log(deliveryMethod);
      }
    });
  };
  const _form = () => (
    <>
      <h4>Enter your contact data</h4>
      <Form onSubmit={orderHandler}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              placeholder="Username"
              onChange={e => setName(e.target.value)}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("street", {
            rules: [
              { required: true, message: "Please input your street address!" }
            ]
          })(
            <Input
              placeholder="Street"
              onChange={e => setAddress({ ...address, street: e.target.value })}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("postal code", {
            rules: [
              { required: true, message: "Please input your postal code!" }
            ]
          })(
            <Input
              placeholder="Postal Code"
              onChange={e =>
                setAddress({ ...address, postalCode: e.target.value })
              }
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("delivery method", {
            rules: [
              { required: true, message: "Please input your delivery method!" }
            ]
          })(
            <Select
              placeholder="Select delivery method"
              onChange={value => setDeliveryMethod(value)}
            >
              <Option value="fastest">Fastest</Option>
              <Option value="standard">Standard</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="default" htmlType="submit">
            ORDER
          </Button>
        </Form.Item>
      </Form>
    </>
  );
  return <div className="ContactData">{isLoading ? <Spinner /> : _form()}</div>;
};

export default Form.create()(ContactData);
