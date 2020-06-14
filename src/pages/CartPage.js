import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import CartList from "../components/CartList";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { Button } from "react-rainbow-components";
import Login from "../components/Login";
import Register from "../components/Register";

export default function CartPage() {
  const { cart, total } = useContext(CartContext);

  return (
    <React.Fragment>
      <Login />
      <Register />
      <div>
        {cart.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              height: "100vh",
              backgroundImage: "linear-gradient(#808080, #d9d9d9)",
              paddingTop: "200px",
            }}
          >
            <Title title={"Your cart is currently empty"} />
            <br />
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/products"
            >
              <Button
                label="Go Back to Our Products"
                variant="border-filled"
                className="rainbow-m-around_large"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              />
            </Link>
          </div>
        ) : (
          <CartList cart={cart} total={total} />
        )}
      </div>
    </React.Fragment>
  );
}
