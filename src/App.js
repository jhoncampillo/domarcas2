import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AutRouter } from "./Router/AutRouter";
//import { BrowserRouter } from "react-router-dom";
//import "./App.css";
///import MainContext from "./Context/MainContext";
import { UnAuthRouter } from "./Router/UnAuthRouter";

function App() {
  return (
    <BrowserRouter>
      {/* <UnAuthRouter /> */}
      <AutRouter />
    </BrowserRouter>
  );
}

export default App;
