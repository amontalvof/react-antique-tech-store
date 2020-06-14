import React, { useContext } from "react";
import Title from "../Title";
import { CartListWrapper } from "./CartListStyle";
import CartItem from "../CartItem/";
import { Link } from "react-router-dom";
import { Button, Card } from "react-rainbow-components";
import { UserContext } from "../../context/user";

export default function CartList({ cart, total, user }) {
  const { logedin, handleLoginOpen } = useContext(UserContext);
  return (
    <CartListWrapper>
      <br />
      <Title title={"Your Cart"} />
      <div className="flex-container">
        <div style={{ flexBasis: "1000px" }}>
          <Card>
            {cart.map((item) => {
              return (
                <div key={item.id}>
                  <CartItem {...item} />
                  <hr className="divisor" />
                </div>
              );
            })}
          </Card>
        </div>
        <div>
          <Card className="stickyPosition">
            <div></div>
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
            {logedin ? (
              <div>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to="/checkout"
                >
                  <Button
                    label="Pay now"
                    variant="border-filled"
                    className="rainbow-m-around_large"
                    style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                  />
                </Link>
              </div>
            ) : (
              <div>
                <p>Log in to your account to pay</p>
                <Button
                  label="Log in"
                  variant="border-filled"
                  className="rainbow-m-around_large"
                  style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                  onClick={() => {
                    handleLoginOpen();
                  }}
                />
              </div>
            )}
          </Card>
        </div>
      </div>
    </CartListWrapper>
  );
}
