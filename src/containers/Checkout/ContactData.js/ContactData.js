import React, { useState } from "react";
import Button from "../../../components/UI/Button";
import "./ContactData.css";
import BaseService from "../../../services/BaseServices";
import Spinner from "../../../components/UI/Spinner";

const ContactData = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    street: "",
    postalCode: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const orderHandler = event => {
    event.preventDefault();
    // console.log(props.ingredients);
    setIsLoading(true);
    const order = {
      ingredients: props.ingredients,
      price: props.totalPrice,
      customer: {
        name: "Haekal Budiman",
        address: "Bandung",
        email: "haekal@gmail.com"
      },
      deliveryMethod: "fastest"
    };
    // add .json after url (FIREBASE)
    BaseService.post("/orders.json", order)
      .then(res => {
        setIsLoading(false);
        props.history.push("/");
      })
      .catch(err => setIsLoading(false));
  };
  const _form = () => (
    <>
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
    </>
  );
  return <div className="ContactData">{isLoading ? <Spinner /> : _form()}</div>;
};

export default ContactData;
