import React from "react";
//import { useState, useEffect } from "react";
import { ViewSearch } from "../../View-Search/ViewSearch";
import { Search } from "../../View-Search/Search";
import { useContext } from "react";
import { MainContext } from "../../../Context/MainContext";
//import { MainContextProvider } from "../../../Context/MainContextProvider";
//import { ContexPorta } from "../../../Context/MainContext";

export const Portafolio = () => {
  // const setDomain = useContext(MainContext);
  // console.log("dddd", setDomain);

  // const [dominios, setDominios] = useState(alfabetic);
  // // console.log("estos son los dominio", dominios);
  // //const = {(name, extension, caracteres, precioVenta, renta, oferta, categoria)} = dominios

  // let domainFilter = [];

  // const [search, setSearch] = useState("");
  // console.log(search.length);
  // //estado para asignar datos

  // if (!search.length >= 1) {
  //   domainFilter = dominios;
  //   console.log("jjjjjjjjjj", domainFilter);
  // } else {
  //   domainFilter = dominios.filter((domain) => {
  //     const todotext = domain.name.toLowerCase();
  //     const searchDomtext = search.toLowerCase();
  //     return todotext.includes(searchDomtext);
  //   });
  // }

  // useEffect(() => {
  //   //console.log("jj useEffect", dominios);
  //   const sorted = domainFilter.sort((a, b) => (a.name > b.name ? 1 : -1));
  //   //console.log("jhon Alf ", sorted);
  //   //asigno array ordenado al state
  //   setDominios(sorted);
  // }, []);
  return (
    <div>
      <h1 style={{ color: "white" }}>Portafolio</h1>
      <Search />
      <hr />
      */
      <ViewSearch />
      <hr />
      <hr />
    </div>
  );
};
