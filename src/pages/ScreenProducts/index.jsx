import React, { useContext } from "react";
import { Products } from "../../Components/Products";
import { CartContext } from "../../context";

export const ScreenProducts = () => {
  const {
    data: { products },
    mutations: { deleteproduct },
  } = useContext(CartContext);
  const productsItems = [
    {
      name: "grema",
      id: 12,
      srcImg: "https://pideygana.com/wp-content/uploads/2019/06/3500052589.png",
    },
    {
      name: "cebolla",
      id: 62,
      srcImg:
        "https://images.rappi.com.mx/products/978738602-1604489094230.png",
    },
    {
      name: "tomate",
      id: 42,
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
                  <img
                    alt={`${name}-${id}`}
                    src={srcImg}
                    height="50"
                    width="50"
                  />
                  <p>{name}</p>
                  <button onClick={() => deleteproduct(id)}>
                    Eliminar del carrito
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
