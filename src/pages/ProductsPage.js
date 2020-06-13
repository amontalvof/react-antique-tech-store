import React, { useContext } from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import Login from "../components/Login";
import Register from "../components/Register";

export default function ProductsPage() {
  //console.log(useContext(ProductContext));
  const { loading, products } = useContext(ProductContext);

  return (
    <React.Fragment>
      <Login />
      <Register />
      <div>
        {loading ? (
          <Loading pTop={false} />
        ) : (
          <ProductList title="Our Products" products={products} pTop={false} />
        )}
      </div>
    </React.Fragment>
  );
}
