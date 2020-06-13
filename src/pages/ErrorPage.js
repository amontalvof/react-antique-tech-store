import React from "react";
import Error404 from "../components/Error404";
import Login from "../components/Login";
import Register from "../components/Register";

export default function ErrorPage() {
  return (
    <React.Fragment>
      <Login />
      <Register />
      <Error404 />
    </React.Fragment>
  );
}
