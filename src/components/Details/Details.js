import React, { useContext } from "react";
import { useHistory } from "react-router-dom"; // this allow us to programmatically navigate to a different page
import { DetailsWrapper } from "./DetailsStyle";
import { Button } from "react-rainbow-components";
import { CartContext } from "../../context/cart";

export default function Details({ product }) {
  const { image, title, price, description } = product;
  const history = useHistory();
  const { addToCart } = useContext(CartContext);

  return (
    <DetailsWrapper>
      <div className="flex-container">
        <div style={{ flexBasis: "700px" }}>
          <h1>{title}</h1>
          <h2>
            Price: <strong>${price}</strong>
          </h2>
          <p>{description} </p>
          <Button
            label="Add to Cart"
            variant="border-filled"
            className="rainbow-m-around_medium"
            style={{ fontSize: "1.5rem" }}
            onClick={() => {
              addToCart(product);
              history.push("/cart"); // history.push() dentro del parentesis digo a donde quiero navegar
            }}
          />
        </div>
        <div>
          <img src={image} alt={title} />
        </div>
      </div>
    </DetailsWrapper>
  );
}
