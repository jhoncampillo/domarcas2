import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
//import { alfabetic } from "../../data/data";
import { Modal } from "../Modal/Modal";

export const CategoiresDomain = ({ domainFilter }) => {
  //const [state, setDominios] = useState(dominios);
  const [showModal, setShowModal] = useState(false);

  console.log("estos son los dominio", domainFilter);
  // const { name, extension, caracteres, precioVenta, renta, oferta, categoria } =
  //   dominios;

  const handleComprar = () => {
    setShowModal(!showModal);
    console.log("Muestra Compra");
  };

  const handleRentar = () => {
    setShowModal(!showModal);
    console.log("Mustra Rentar");
  };

  const handleOfertar = () => {
    setShowModal(!showModal);
    console.log("Muestra Ofertar");
  };

  return (
    <>
      {/* {showModal && <Modal />} */}
      <h2 style={{ color: "white" }}>Tarjetas de Dominio</h2>
      <hr />
      <hr />
      <div className="d-flex p-2 flex-wrap p-2">
        {domainFilter.map(
          (
            {
              name,
              extension,
              caracteres,
              precioVenta,
              renta,
              oferta,
              categoria,
            },
            index
          ) => {
            return (
              <div key={index} className="card w-50 text-center  ">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">Extension : {extension}</p>
                  <p className="card-text">No.Caracteres : {caracteres}</p>
                  <p className="card-text">Precio de Venta : {precioVenta}</p>
                  <p className="card-text">Precio de Renta : {renta}</p>
                  <p className="card-text">
                    <strong>Categoria : </strong>
                    {categoria}
                  </p>
                  <Button
                    variant="dark  mx-2"
                    size="sm"
                    onClick={handleComprar}
                  >
                    Comprar
                  </Button>
                  <Button variant="dark  mx-2" size="sm" onClick={handleRentar}>
                    Rentar
                  </Button>
                  <Button
                    variant="dark  mx-2"
                    size="sm"
                    onClick={handleOfertar}
                  >
                    Ofertar
                  </Button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};
