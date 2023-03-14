import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import { alfabetic } from "../data/data";
import { MainContext } from "./MainContext";
import { ReducerDomain } from "../reducer/ReducerDomain";
import { DomainTypes } from "../reducer/DomainTypes";
//import { CartDomain } from "../Components/Cart/CartDomain";

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

  const delFromCart = (name) => {
    console.log(name);
    const action = {
      type: DomainTypes.REMOVE_ONE_FROM_CARD,
      payload: name,
    };
    dispatch(action);
  };

  const clearCart = () => {
    const action = {
      type: DomainTypes.CLEAR_CART,
      payload: alfabetic,
    };
    dispatch(action);
  };

  //Login*********************************/

  const [stateLogin, setStateLogin] = useState(true);
  const handleLogin = () => {
    console.log("Login,", stateLogin);
    setStateLogin(!stateLogin);
    const action = {
      type: DomainTypes.LOGIN,
      payload: stateLogin,
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
        delFromCart,
        clearCart,
        handleLogin,
        stateLogin,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
