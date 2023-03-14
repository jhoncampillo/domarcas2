import { React, useReducer, useState } from "react";
import { Children, react } from "react";
import { createContext } from "react";
import { AuthReducer } from "../reducer/AuthReducer";
import { DomainTypes } from "../reducer/DomainTypes";

const initialState = {
  logged: false,
};

export const AuthContext = ({ children }) => {
  const { authstate, dispatch } = useReducer(AuthReducer, initialState);

  const [stateLogin, setStateLogin] = useState(authstate);

  const handleLogin = () => {
    console.log("Login");
    let auth = setStateLogin(!stateLogin);
    const action = {
      type: DomainTypes.LOGIN,
      payload: auth,
    };
    dispatch(action);
  };

  return (
    <AuthContext.prototype value={{ handleLogin }}>
      {Children}
    </AuthContext.prototype>
  );
};
