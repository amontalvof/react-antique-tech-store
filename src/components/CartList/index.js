import React from "react";
import Title from "../Title";
import { CartListWrapper } from "./CartListStyle";
import CartItem from "../CartItem/";
import { Link } from "react-router-dom";
import { Button, Card } from "react-rainbow-components";
//import Hero from "../Hero";
//import img from "../../assets/images/CartBgd.jpg";
//<Hero img={img} cart={true} />
export default function index({ cart, total, user }) {
  return (
    <CartListWrapper>
      <br />
      <Title title={"Your Cart"} />
      <div className="flex-container">
        <div style={{ flexBasis: "1000px" }}>
          {cart.map((item) => {
            return (
              <div key={item.id}>
                <CartItem {...item} />
                <hr className="divisor" />
              </div>
            );
          })}
        </div>
        <div>
          <Card>
            <h2>
              Subtotal: <strong style={{ color: "#3a2fd0" }}>${total}</strong>
            </h2>
            <h2>
              Tax:{" "}
              <strong style={{ color: "#3a2fd0" }}>
                ${parseFloat((total * 0.1).toFixed(2))}
              </strong>
            </h2>
            <h2>
              Total:{" "}
              <strong style={{ color: "#3a2fd0" }}>
                ${parseFloat((total + total * 0.1).toFixed(2))}
              </strong>{" "}
            </h2>
            {user ? (
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/checkout"
              >
                <Button
                  label="Checkout"
                  variant="border-filled"
                  className="rainbow-m-around_large"
                  style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                />
              </Link>
            ) : (
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/login"
              >
                <Button
                  label="Login"
                  variant="border-filled"
                  className="rainbow-m-around_large"
                  style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                />
              </Link>
            )}
          </Card>
        </div>
      </div>
    </CartListWrapper>
  );
}
