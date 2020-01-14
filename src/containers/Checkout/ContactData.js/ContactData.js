import React, { useState } from "react";
import Button from "../../../components/UI/Button";
import "./ContactData.css";

const ContactData = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    street: "",
    postalCode: ""
  });

  const orderHandler = event => {
    event.preventDefault();
    console.log(props.ingredients);
  };
  return (
    <div className="ContactData">
      <h4>Enter your contact data</h4>
      <form>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <input type="text" name="street" placeholder="Your address" />
        <input type="text" name="postal" placeholder="Your postal code" />
        <Button type="Success" onClick={orderHandler}>
          ORDER
        </Button>
      </form>
    </div>
  );
};

export default ContactData;
