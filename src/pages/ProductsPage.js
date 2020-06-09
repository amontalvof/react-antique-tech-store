import React, { useContext } from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  //console.log(useContext(ProductContext));
  const { loading, products } = useContext(ProductContext);
  //console.log(products);

  return (
    <div>
      {loading ? (
        <Loading pTop={false} />
      ) : (
        <ProductList title="Our Products" products={products} pTop={false} />
      )}
    </div>
  );
}
