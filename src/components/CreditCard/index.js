import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CreditCardWrapper } from "./CreditCardStyle";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Button, Card } from "react-rainbow-components";
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/cart";
import { UserContext } from "../../context/user";
import Title from "../Title";
import img from "../../assets/images/CreditCardBgd.jpg";

export default function CreditCard() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const { total } = useContext(CartContext);
  const { logedin } = useContext(UserContext);

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    //console.log(data);
    //clearCart();
    // limpiar campos
    e.target.reset();
  };

  return (
    <React.Fragment>
      {logedin ? (
        <CreditCardWrapper img={img}>
          <div className="ccBack">
            <Card style={{ paddingTop: "30px" }}>
              <div style={{ textAlign: "center" }}>
                <h2>
                  Total to pay:{" "}
                  <strong style={{ color: "#3a2fd0" }}>
                    ${parseFloat((total + total * 0.1).toFixed(2))}
                  </strong>{" "}
                </h2>
              </div>

              <br />
              <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
                locale={{ valid: "valid thru" }}
                placeholders={{ name: "YOUR NAME HERE" }}
              />
              <br />
              <div style={{ width: "80%", margin: "auto" }}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <label htmlFor="number">
                    <strong>Card Number</strong>
                  </label>
                  <input
                    type="tel"
                    name="number"
                    id="number"
                    placeholder="4444 3333 2222 1111"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    ref={register({
                      required: {
                        value: true,
                        message: "Number is required!",
                      },
                    })}
                  />
                  <span style={{ color: "#FE4849" }}>
                    <strong>{errors.number && errors.number.message}</strong>
                  </span>
                  <br />
                  <br />

                  <label htmlFor="name">
                    <strong>Name</strong>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    ref={register({
                      required: {
                        value: true,
                        message: "Name is required!",
                      },
                    })}
                  />
                  <span style={{ color: "#FE4849" }}>
                    <strong>{errors.name && errors.name.message}</strong>
                  </span>
                  <br />
                  <br />

                  <label htmlFor="expiry">
                    <strong>MM/YY Expiry</strong>
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    id="expiry"
                    placeholder="01/23"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    ref={register({
                      required: {
                        value: true,
                        message: "Expiry is required!",
                      },
                    })}
                  />
                  <span style={{ color: "#FE4849" }}>
                    <strong>{errors.expiry && errors.expiry.message}</strong>
                  </span>
                  <br />
                  <br />

                  <label htmlFor="cvc">
                    <strong>CVC</strong>
                  </label>
                  <input
                    type="tel"
                    name="cvc"
                    id="cvc"
                    placeholder="321"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    ref={register({
                      required: {
                        value: true,
                        message: "CVC is required!",
                      },
                    })}
                  />
                  <span style={{ color: "#FE4849" }}>
                    <strong>{errors.cvc && errors.cvc.message}</strong>
                  </span>
                  <br />
                  <br />
                  <div className="rainbow-flex rainbow-justify_end">
                    <Button type="submit" label="Checkout" variant="brand" />
                  </div>
                  <br />
                  <br />
                </form>
              </div>
            </Card>
            <br />
            <br />
          </div>
        </CreditCardWrapper>
      ) : (
        <div
          style={{
            textAlign: "center",
            background: "linear-gradient(#808080, #d9d9d9)",
            padding: "200px 15px 0 15px",
            minHeight: "100vh",
          }}
        >
          <Title title={"Log in to your account to pay"} />
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/"
          >
            <Button
              label="Home Page"
              variant="border-filled"
              className="rainbow-m-around_large"
              style={{ fontWeight: "bold" }}
            />
          </Link>
        </div>
      )}
    </React.Fragment>
  );
}
