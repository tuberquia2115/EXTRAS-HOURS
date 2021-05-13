import React from "react";
import { Product } from "../UI/Product";

export const Products = ({ products }) => (
  <div>
     <h1 style={{ textAlign: "center" }}>Productos</h1>
    <ul style={{display: "flex", flexDirection: "row", listStyle: "none"}}>
      {products.map((elm) => (
        <li>
          <Product item={elm} />
        </li>
      ))}
    </ul>
  </div>
);
