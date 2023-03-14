import React from "react";
//import { useState, useEffect } from "react";
import { ViewSearch, Search } from "../../View-Search/";
import { SearchForCategory } from "../../View-Search/SearchForCategory";
import { useState } from "react";
//import { MainContext } from "../../../Context/MainContext";
//import { MainContextProvider } from "../../../Context/MainContextProvider";
//import { ContexPorta } from "../../../Context/MainContext";

export const Portafolio = () => {
  // const setDomain = useContext(MainContext);
  // console.log("dddd", setDomain);

  const [showsearch, setShowsearch] = useState(false);
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
  const handleView = () => {
    setShowsearch(!showsearch);
  };

  return (
    <div className="container ">
      <h1 style={{ color: "white" }}>Portafolio</h1>
      <button className="btn btn-primary mx-2 my-2" onClick={handleView}>
        {showsearch ? "Buscar Categoria" : "Buscar Nombre"}
      </button>
      {showsearch ? <Search /> : <SearchForCategory />}
      <ViewSearch />

      <hr />
    </div>
  );
};
