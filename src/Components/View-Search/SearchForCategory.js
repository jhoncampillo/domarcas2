import React from "react";
import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import { useForm } from "../../Utils/useForm";
import { useNavigate } from "react-router-dom";
import "./form.css";

export const SearchForCategory = () => {
  const { search, reset: resetSearched, searchCategoria } = useContext(
    MainContext
  );

  const navigate = useNavigate();

  const { searchTextc, handleInputChange, reset } = useForm({
    searchTextc: "",
  });

  const handleSearchDomainct = (event) => {
    event.preventDefault();
    if (searchTextc.trim().length <= 1) return;

    searchCategoria(searchTextc);

    navigate(`?searchText=${searchTextc}`);
  };

  return (
    <form onSubmit={handleSearchDomainct} className="container">
      <div className="input-group col-5">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            Busca Dominio por categoria
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          name="searchTextc"
          value={searchTextc}
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
