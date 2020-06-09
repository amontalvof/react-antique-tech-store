import React, { useContext } from "react";
import { ProductContext } from "../context/products";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { Button } from "react-rainbow-components";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";

export default function HomePage() {
  const { loading, featured } = useContext(ProductContext);
  return (
    <React.Fragment>
      <div>
        <Hero>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/products"
          >
            <Button
              label="Our products"
              variant="neutral"
              className="rainbow-m-around_large"
              style={{ fontWeight: "bold" }}
            />
          </Link>
        </Hero>
        <div>
          {loading ? (
            <Loading pTop={true} />
          ) : (
            <ProductList
              title="Featured Products"
              products={featured}
              pTop={true}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
