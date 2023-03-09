import React from "react";
import { MainContext } from "../../Context/MainContext";
import { useContext } from "react";
import { CardItem } from "./CardItem";
export const CartDomain = () => {
  const { cart, clearCart, delfromcart } = useContext(MainContext);
  console.log("NNNN", cart);
  return (
    <div className="container">
      <div>
        <h2 style={{ color: "#ffffff" }}>Dominios a Ofertar</h2>
        <button className="btn btn-primary" onClick={clearCart}>
          Limpiar Carrito
        </button>
        <div className="d-flex justify-content-between flex-wrap bg-light border mt-3">
          {cart.map((item, index) => (
            <CardItem key={index} domCart={item} delfromcart={delfromcart} />
          ))}
        </div>
      </div>
      {/* <h2>Productos Disponibles</h2>
    <hr />
    <div className="d-flex justify-content-between flex-wrap bg-light border mt-3">
      {cart.map((producto) => (
        <ListItemCard
          key={producto.id}
          // No pude trabajar con {...produccto por que daba error en la funcion}
          data={producto}
          addToCart={addToCart}
        />
      ))} */}
    </div>
  );
};
