import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { MainContext } from "../../Context/MainContext";
//import { useState, useEffect } from "react";
import { DominioModal } from "../DominioModal/DominioModal";

export const AlfabeticDomain = ({ dominios }) => {
  const { isOpen, setIsOpen, addToCart } = useContext(MainContext);
  console.log(isOpen);

  //   const handleAssending = (a, b) => {
  //     const sorted = dominios.sort((a, b) => (a.name > b.name ? 1 : -1));
  //     setDominios(sorted);
  //     console.log("jj1", sorted);
  //   };
  // console.log("jj8- index", dominios);

  // //   const handleDescending = () => {
  // //     console.log("Ordenamiento Descenente");
  // //     const sorted = dominios.sort((a, b) => (a.name < b.name ? 1 : -1));
  // //     setDominios(sorted);
  // //   };

  //   //efecto para ordenar
  // useEffect(
  //   (a, b) => {
  //     //console.log("jj useEffect", dominios);
  //     const sorted = dominios.sort((a, b) => (a.name > b.name ? 1 : -1));
  //     console.log("jhon Alf ", sorted);
  //     setDominios(sorted);
  //   },
  //   [dominios]
  // );
  // const d = new Date();
  // let id = Date.now();
  let id = new Date().getTime();

  ///modal
  // const [showModal, setShowModal] = useState(false);
  // const handleOpenModal = () => {
  //   setIsOpen(true);
  //   console.log("Open Modal");
  //   // addToModal(name);
  // };

  return (
    <div className="container">
      <div className="mt-3 text-center">
        <h2 style={{ color: "#ffffff" }}>Dominios en orden Alfabetico</h2>
        //
        <DominioModal />
        {/* <button className="btn btn-primary mx-2" onClick={handleAssending}>
        Ascendente
      </button>
      <button className="btn btn-primary" onClick={handleDescending}>
        Descendente
      </button> */}
        <hr />
        <table className="table" size="sm" style={{ color: "#ffffff" }}>
          <thead>
            <tr style={{ color: "#ffffff" }}>
              <th scope="col">id</th>
              <th scope="col">Dominio</th>
              <th scope="col">Extension</th>
              <th scope="col">Categoria</th>
              <th scope="col">Caracteres</th>
              <th scope="col">Precio</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          {dominios.map(
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
                <tbody key={index} className="p-2">
                  <tr>
                    <th scope="row">{id}</th>
                    <td>{name}</td>
                    <td>{extension}</td>
                    <td>{categoria}</td>
                    <td>{caracteres}</td>
                    <td>{precioVenta}</td>
                    <Button
                      // variant="dark  mx-2"
                      className="btn btn-primary"
                      size="sm"
                      //style={{ backgroundColor: "#000000" }}
                      // onClick={handleOpenModal}
                      onClick={() => addToCart(name)}
                    >
                      <i className="fas fa-edit" />
                      Ofertar
                    </Button>
                    {/* <Button
                      // variant="dark  mx-2"
                      className="btn btn-primary"
                      size="sm"
                      style={{ backgroundColor: "#000000" }}
                      onClick={handleOpenModal}
                    >
                      Rentar
                    </Button>
                    <Button
                      // variant="dark  mx-2"
                      className="btn btn-primary"
                      size="sm"
                      style={{ backgroundColor: "#000000" }}
                    >
                      Ofertar
                    </Button> */}
                  </tr>
                </tbody>
              );
            }
          )}
        </table>
      </div>
    </div>
  );
};
