import React from "react";
import { ProductListWrapper } from "./ProductListStyle";
import SingleProduct from "../SingleProduct";
import Title from "../Title";

export default function index({ title, products, pTop }) {
  return (
    <ProductListWrapper pTop={pTop}>
      <Title title={title} />
      <div className="flex-container">
        {products.map((item) => {
          return (
            <div key={item.id}>
              <SingleProduct {...item} />
            </div>
          );
        })}
      </div>
    </ProductListWrapper>
  );
}
