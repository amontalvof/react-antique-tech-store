import React, { useContext } from "react";
import { ProductContext } from "../context/products";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { Button } from "react-rainbow-components";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import Login from "../components/Login";
import Register from "../components/Register";
import img from "../assets/images/HomeBgd.jpg";

export default function HomePage() {
  const { loading, featured } = useContext(ProductContext);

  return (
    <React.Fragment>
      <Login />
      <Register />
      <div>
        <Hero img={img} home={true}>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/products"
          >
            <Button
              label="Our products"
              variant="border-filled"
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
