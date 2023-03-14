import React from "react";
import { MainContext } from "../../Context/MainContext";
import { useContext } from "react";
import { CardItem } from "./CardItem";
export const CartDomain = () => {
  const { cart, clearCart, delFromCart, isOpen, setIsOpen } = useContext(
    MainContext
  );
  console.log("NNNN", cart);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div>
        <h2 style={{ color: "#ffffff" }}>Dominios a Ofertar</h2>
        <button className="btn btn-primary" onClick={clearCart}>
          Limpiar Carrito
        </button>
        <button className="btn btn-primary mx-2" onClick={handleOpenModal}>
          Ofertar
        </button>
        <div className="d-flex justify-content-between flex-wrap bg-light border mt-3">
          {cart.map((item, index) => (
            <CardItem key={index} domCart={item} delfromcart={delFromCart} />
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
