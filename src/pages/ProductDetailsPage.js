import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
  //console.log(useParams());
  const { id } = useParams();

  return <h1>hello from product details page. Product id is: {id}</h1>;
}
