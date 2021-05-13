import React from "react";
import { CartContext } from "../../context";
import { useStateContainer } from "./actions";

export const CartProvider = ({ children }) => {
  const contextValues = useStateContainer({products:[]});

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
