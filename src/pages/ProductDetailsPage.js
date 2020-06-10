import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import Details from "../components/Details/";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id));

  return (
    <div>
      {products.length === 0 ? (
        <Loading pTop={false} />
      ) : (
        <Details product={product} />
      )}
    </div>
  );
}
