import React, { useContext } from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import Login from "../components/Login";
import Register from "../components/Register";

export default function ProductsPage() {
  //console.log(useContext(ProductContext));
  const { loading, sorted, page } = useContext(ProductContext);
  //console.log(sorted);

  return (
    <React.Fragment>
      <Login />
      <Register />
      {loading ? (
        <Loading pTop={false} />
      ) : (
        <ProductList
          title="Our Products"
          products={sorted[page]}
          pTop={false}
        />
      )}
    </React.Fragment>
  );
}
