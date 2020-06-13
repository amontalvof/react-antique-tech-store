import React from "react";
import Info from "../components/Info";
import Login from "../components/Login";
import Register from "../components/Register";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Login />
      <Register />
      <Info />
    </React.Fragment>
  );
}
