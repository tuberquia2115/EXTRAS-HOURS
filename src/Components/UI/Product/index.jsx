import React, { useContext } from "react";
import { CartContext } from "../../../context";

export const Product = ({ item }) => {
  const { name, id, srcImg } = item;
  const {
    mutations: { addProductCart }
  } = useContext(CartContext);
  return (
    <div style={{display: 'flex', flexDirection: "column", backgroundColor: "lightcyan", padding: "1rem", margin: "1rem", borderRadius: "10px"}}>
      <img alt={`${name}-${id}`} src={srcImg} height="100" width="100"/>
      <p>{name}</p>
      <button onClick={() => addProductCart(item)}>Agregar al carrito</button>
    </div>
  );
};


