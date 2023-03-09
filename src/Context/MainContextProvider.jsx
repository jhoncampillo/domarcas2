import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import { alfabetic } from "../data/data";
import { MainContext } from "./MainContext";
import { ReducerDomain } from "../reducer/ReducerDomain";
import { DomainTypes } from "../reducer/DomainTypes";

export const MainContextProvider = ({ children }) => {
  //Modal
  const [isOpen, setIsOpen] = useState(false);

  const [state, dispatch] = useReducer(ReducerDomain, alfabetic);

  const search = (q) => {
    dispatch({ type: DomainTypes.FILTER_NAME, payload: q });
  };

  const searchCategoria = (ct) => {
    dispatch({ type: DomainTypes.FILTER_CATEGORY, payload: ct });
  };

  const reset = () => {
    dispatch({ type: DomainTypes.RESET_SEARCHED });
  };

  const addToCart = (name) => {
    //lllno el array y lo envio al componente AddShoppinProduct
    const action = {
      type: DomainTypes.ADD_TO_CART,
      payload: name,
    };
    dispatch(action);
  };

  return (
    <MainContext.Provider
      value={{
        ...state,
        search,
        reset,
        searchCategoria,
        isOpen,
        setIsOpen,
        addToCart,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
