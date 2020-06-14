import React from "react";
import CreditCard from "../components/CreditCard";
import Login from "../components/Login";
import Register from "../components/Register";

export default function CheckoutPage() {
  return (
    <React.Fragment>
      <Login />
      <Register />
      <CreditCard />
    </React.Fragment>
  );
}
