import React, { useContext } from "react";
import { FaAngleUp, FaAngleDown, FaTrashAlt } from "react-icons/fa";
import { CartItemWrapper } from "./CartItemStyle";
import { CartContext } from "../../context/cart";

export default function CartItem({ id, image, title, price, amount }) {
  const { removeItem, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );
  return (
    <CartItemWrapper>
      <div className="flex-container">
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <h4>
            <strong> {title}</strong>
          </h4>
        </div>
        <div>
          <h5>
            <strong style={{ color: "#303030" }}>Price: </strong>
            <strong>${price}</strong>
          </h5>
        </div>
        <div>
          <FaTrashAlt
            className="trashItem"
            onClick={() => {
              removeItem(id);
            }}
          />
        </div>
        <div>
          <h3>
            <span>
              <FaAngleDown
                className="countItem"
                onClick={() => {
                  decreaseAmount(id, amount);
                }}
              />
            </span>
            &nbsp;<strong>{amount}</strong>&nbsp;
            <span>
              <FaAngleUp
                className="countItem"
                onClick={() => {
                  increaseAmount(id);
                }}
              />
            </span>
          </h3>
        </div>
      </div>
    </CartItemWrapper>
  );
}
