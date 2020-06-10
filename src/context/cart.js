// cart context
// hay que importar CartProvider en el index.js

import React, { useState, useEffect } from "react";
//import localCart from "../utils/localCart";

function getCartFromLocalStorage() {
  return localStorage.getItem("cartATS")
    ? JSON.parse(localStorage.getItem("cartATS"))
    : [];
}

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    //local storage
    localStorage.setItem("cartATS", JSON.stringify(cart));
    //cart items
    let newCartItem = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItem);

    //cart total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  //remove item
  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };

  //increase amount
  const increaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newCart);
  };

  //decrease amount
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
    } else {
      const newCart = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setCart(newCart);
    }
  };

  //add to cart
  const addToCart = (product) => {
    const {
      id,
      image: { url },
      title,
      price,
    } = product;
    const item = [...cart].find((item) => item.id === id);
    if (item) {
      increaseAmount(id);
      return; //return from the function.
    } else {
      const newItem = { id, image: url, title, price, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
