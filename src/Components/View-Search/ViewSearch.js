import React from "react";
import { Button } from "react-bootstrap";
// import { Search } from "./Search";
import { useState, useContext, useEffect } from "react";
import { CategoiresDomain } from "../CategoriesDomain/CategoiresDomain";
import { AlfabeticDomain } from "../AlfabeticDomain/AlfabeticDomain";
import { MainContext } from "../../Context/MainContext";
//import { alfabetic } from "../../data/data";

export const ViewSearch = () => {
  const domainFilter = useContext(MainContext);

  //const [dominiosort, setDominios] = useState(domainFilter);

  // useEffect(() => {
  //   console.log("fff", dominiosort);
  //   //console.log("jj useEffect", dominios);
  //   const sorted = domainFilter.sort((a, b) => (a.name > b.name ? 1 : -1));
  //   console.log("jhon Alf ", sorted);
  //   return setDominios(sorted);
  // }, []);

  const [view, setView] = useState(true);

  const handleView = () => {
    console.log("Cambio de Vistas ");
    setView(!view);
  };

  return (
    <div className="container-sm">
      <h1 style={{ color: "white" }}>Cambio de Vistas</h1>
      <hr style={{ color: "white" }} />
      <div className="row">
        <div className="col text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleView}
          >
            Lista/Categorias
          </button>
        </div>
        {view ? (
          <AlfabeticDomain domainFilter={domainFilter} />
        ) : (
          <CategoiresDomain domainFilter={domainFilter} />
        )}
      </div>
    </div>
  );
};
