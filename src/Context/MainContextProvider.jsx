import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import { alfabetic } from "../data/data";
import { MainContext } from "./MainContext";
import { ReducerDomain } from "../reducer/ReducerDomain";
import { DomainTypes } from "../reducer/DomainTypes";

export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerDomain, alfabetic);

  const search = (q) => {
    dispatch({ type: DomainTypes.FILTER_NAME, payload: q });
  };

  const reset = () => {
    dispatch({ type: DomainTypes.RESET_SEARCHED });
  };

  return (
    <MainContext.Provider value={{ ...state, search, reset }}>
      {children}
    </MainContext.Provider>
  );
};
