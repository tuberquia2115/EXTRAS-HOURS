import { useState } from "react";

export const useStateContainer = (initialState = {}) => {
  const [products, setProducts] = useState(initialState.products);

  const addProductCart = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteproduct = (idProduct) => {
    setProducts((prev) => prev.filter((elm) => elm.id !== idProduct));
  };

  return {
    data: {
      products
    },
    mutations: {
      addProductCart,
      deleteproduct,
    },
  };
};
