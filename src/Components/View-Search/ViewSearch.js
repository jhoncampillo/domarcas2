import React from "react";
import { Button } from "react-bootstrap";
// import { Search } from "./Search";
import { useState, useContext, useEffect } from "react";
import { CategoiresDomain } from "../CategoriesDomain/CategoiresDomain";
import { AlfabeticDomain } from "../AlfabeticDomain/AlfabeticDomain";
import { MainContext } from "../../Context/MainContext";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

//import { alfabetic } from "../../data/data";

export const ViewSearch = () => {
  const { allDomains, searched } = useContext(MainContext);
  const location = useLocation();

  const { searchText } = queryString.parse(location.search);

  const finalList = searchText ? searched : allDomains;

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
          <AlfabeticDomain dominios={finalList} />
        ) : (
          <CategoiresDomain dominios={finalList} />
        )}
      </div>
    </div>
  );
};
