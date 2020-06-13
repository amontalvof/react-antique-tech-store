import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import Details from "../components/Details/";
import Login from "../components/Login";
import Register from "../components/Register";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id));

  return (
    <React.Fragment>
      <Login />
      <Register />
      <div>
        {products.length === 0 ? (
          <Loading pTop={false} />
        ) : (
          <Details product={product} />
        )}
      </div>
    </React.Fragment>
  );
}
