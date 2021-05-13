import React, { useContext } from "react";
import {Avatar, Button} from '@material-ui/core';
import { Products } from "../../Components/Products";
import { CartContext } from "../../context";

export const ScreenProducts = () => {
  const {
    data: { products },
    mutations: { deleteproduct },
  } = useContext(CartContext);
  const productsItems = [
    {
      name: "Crema",
      id: 12,
      srcImg: "https://pideygana.com/wp-content/uploads/2019/06/3500052589.png",
    },
    {
      name: "Crema",
      id: 12,
      srcImg: "https://pideygana.com/wp-content/uploads/2019/06/3500052589.png",
    },
    {
      name: "Crema",
      id: 232,
      srcImg: "https://pideygana.com/wp-content/uploads/2019/06/3500052589.png",
    },
    {
      name: "Cebolla",
      id: 653,
      srcImg:
        "https://images.rappi.com.mx/products/978738602-1604489094230.png",
    },
    {
      name: "Cebolla",
      id: 262,
      srcImg:
        "https://images.rappi.com.mx/products/978738602-1604489094230.png",
    },
    {
      name: "Cebolla",
      id: 342,
      srcImg:
        "https://images.rappi.com.mx/products/978738602-1604489094230.png",
    },
    {
      name: "Tomate",
      id: 42,
      srcImg:
        "https://i.pinimg.com/originals/6d/48/bd/6d48bd138f272a340c17b8e21dd7f47a.png",
    },
    {
      name: "Tomate",
      id: 82,
      srcImg:
        "https://i.pinimg.com/originals/6d/48/bd/6d48bd138f272a340c17b8e21dd7f47a.png",
    },
    {
      name: "Tomate",
      id: 33,
      srcImg:
        "https://i.pinimg.com/originals/6d/48/bd/6d48bd138f272a340c17b8e21dd7f47a.png",
    },
    {
      name: "Tomate",
      id: 52,
      srcImg:
        "https://i.pinimg.com/originals/6d/48/bd/6d48bd138f272a340c17b8e21dd7f47a.png",
    }, 
    {
      name: "Tomate",
      id: 89,
      srcImg:
        "https://i.pinimg.com/originals/6d/48/bd/6d48bd138f272a340c17b8e21dd7f47a.png",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "2rem auto",
        width: "100%",
      }}
    >
      <Products products={productsItems} />
      {products.length !== 0 && (
        <div style={{ width: "100%" }}>
          <h1 style={{textAlign:"center"}}>Productos del carrito</h1>
          <ul style={{ listStyle: "none" }}>
            {products.map(({ name, id, srcImg }) => (
              <li>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "lightgreen",
                    padding: "1rem",
                    margin: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  <Avatar
                    alt={`${name}-${id}`}
                    src={srcImg}
                  />
                  <h3>{name}</h3>
                  <Button 
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={() => deleteproduct(id)}>
                    Eliminar del carrito
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
