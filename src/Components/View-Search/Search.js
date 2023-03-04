import React from "react";
import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import { useForm } from "../../Utils/useForm";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { search, reset: resetSearched } = useContext(MainContext);

  const navigate = useNavigate();

  const { searchText, handleInputChange, reset } = useForm({
    searchText: "",
  });

  const handleSearchDomain = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    search(searchText);

    navigate(`?searchText=${searchText}`);
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
      <button
        className="btn btn-outline-primary mx-1 my-1"
        onClick={(e) => {
          reset();
          resetSearched();
          navigate(``);
        }}
      >
        Reset
      </button>
    </form>
  );
};
