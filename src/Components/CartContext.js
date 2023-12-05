import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// custom hook usecart
export const useCart = () => {
  return useContext(CartContext);
};

// cart provider component
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cartCount")) || [];
    setCartCount(existingCart.length);
  }, []);

  const addToCart = (productId, buttonText) => {
    // this if condition is for the button which has View cart state
    if (buttonText === "Add to Cart") {
      const existingCart = JSON.parse(localStorage.getItem("cartCount")) || [];
      const updatedCart = [...existingCart, { id: productId }];
      localStorage.setItem("cartCount", JSON.stringify(updatedCart));
      setCartCount(updatedCart.length);
    }
  };

  const value = {
    cartCount,
    addToCart,
  };

  return <CartContext.Provider value={value}>
        {children}
        </CartContext.Provider>;
};
