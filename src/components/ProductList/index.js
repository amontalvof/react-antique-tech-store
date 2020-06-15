import React from "react";
import { ProductListWrapper } from "./ProductListStyle";
import SingleProduct from "../SingleProduct";
import Title from "../Title";
import Filters from "../Filters";
import Paginate from "../Paginate";

export default function index({ title, products, pTop }) {
  return (
    <ProductListWrapper pTop={pTop}>
      {products === undefined ? (
        <div>
          <Title title={title} />
          <div>
            <br />
            <Filters />
            <br />
          </div>
        </div>
      ) : (
        <div>
          <Title title={title} />
          {title === "Our Products" ? (
            <div>
              <br />
              <Filters />
              <br />
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex-container">
            {products.map((item) => {
              return (
                <div key={item.id}>
                  <SingleProduct {...item} />
                </div>
              );
            })}
          </div>
          {title === "Our Products" ? (
            <div>
              <br />
              <br />
              <Paginate />
              <br />
              <br />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </ProductListWrapper>
  );
}
