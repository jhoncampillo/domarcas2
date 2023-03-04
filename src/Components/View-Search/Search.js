import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useReducer, useContext } from "react";
import { ReducerDomain } from "../../reducer/ReducerDomain";
import { DomainTypes } from "../../reducer/DomainTypes";
import { alfabetic } from "../../data/data";
import { MainContext } from "../../Context/MainContext";
import { useForm } from "../../Utils/useForm";
import { AlfabeticDomain } from "../AlfabeticDomain/AlfabeticDomain";

export const Search = () => {
  const initialState = useContext(MainContext);

  const { searchText, handleInputChange } = useForm({
    searchText: "",
  });

  const [state, dispatch] = useReducer(ReducerDomain, initialState);
  console.log("RRR", state);
  //destructuro

  //const { alfabetic, domainFilter } = state;

  //Metodos
  const handleSearchDomain = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    console.log({ searchText });

    const action = {
      type: DomainTypes.FILTER_NAME,
      state: state,
      payload: searchText,
    };
    dispatch(action);
  };

  const handleCategory = (category) => {
    // const action = {
    //   type: DomainTypes.FILTER_CATEGORY,
    //   payload: category,
    // };
    // dispatch(action);
  };

  return (
    <form onSubmit={handleSearchDomain}>
      <div className="input-group col-5">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            Busca Dominio por Nombre
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          name="searchText"
          value={searchText}
          onChange={handleInputChange}
        ></input>
      </div>
      <button className="btn btn-outline-primary mx-1 my-1">Search</button>
    </form>
  );
};
