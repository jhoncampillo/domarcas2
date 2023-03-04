import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { MainContext } from "../../Context/MainContext";
//import { useState, useEffect } from "react";

export const AlfabeticDomain = ({ dominios }) => {
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

  return (
    <>
      <div className="mt-3 text-center">
        <h2 style={{ color: "#ffffff" }}>Dominios en orden Alfabetico</h2>
        <hr />
        <hr />
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
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{extension}</td>
                    <td>{caracteres}</td>
                    <td>{precioVenta}</td>
                    <Button
                      variant="dark  mx-2"
                      size="sm"
                      style={{ backgroundColor: "#000000" }}
                    >
                      Comprar
                    </Button>
                    <Button
                      variant="dark  mx-2"
                      size="sm"
                      style={{ backgroundColor: "#000000" }}
                    >
                      Rentar
                    </Button>
                    <Button
                      variant="dark  mx-2"
                      size="sm"
                      style={{ backgroundColor: "#000000" }}
                    >
                      Ofertar
                    </Button>
                  </tr>
                </tbody>
              );
            }
          )}
        </table>
      </div>
    </>
  );
};
