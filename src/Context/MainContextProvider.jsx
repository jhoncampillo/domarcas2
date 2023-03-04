import React from "react";
import { useState, useEffect } from "react";
import { alfabetic } from "../data/data";
import { MainContext } from "./MainContext";

export const MainContextProvider = ({ children }) => {
  const [dominios, setDominios] = useState(alfabetic);
  let domainFilterw = [];

  const Sorted = () => {
    //console.log("jj useEffect", dominios);
    const sorted = dominios.sort((a, b) => (a.name > b.name ? 1 : -1));
    //console.log("jhon Alf ", sorted);
    //asigno array ordenado al state
    setDominios(sorted);
  };

  useEffect(() => {
    Sorted();
  }, []);

  return (
    <MainContext.Provider value={dominios}>{children}</MainContext.Provider>
  );
};
