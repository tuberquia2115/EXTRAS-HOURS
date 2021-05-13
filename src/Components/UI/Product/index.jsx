import React, { useContext } from "react";
import {Button, Avatar} from '@material-ui/core';
import { CartContext } from "../../../context";

export const Product = ({ item }) => {
  const { name, id, srcImg } = item;
  const {
    mutations: { addProductCart }
  } = useContext(CartContext);
  return (
    <div style={{display: 'flex', flexDirection: "column", backgroundColor: "lightseagreen", padding: "1rem", margin: "1rem", borderRadius: "10px",justifyContent: "center", alignItems:"center"}}>
      <img alt={`${name}-${id}`} src={srcImg} height="100" width="100"/>
      <h3>{name}</h3>
      <Button 
      variant="outlined"
      size="small"
      color="primary"
      onClick={() => addProductCart(item)}>Agregar al carrito</Button>
    </div>
  );
};


