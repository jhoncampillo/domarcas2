import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { PortafolioAdmin } from "../Components/PortafoliAdmin/PortafolioAdmin";
import { NavbarMenu } from "../NavBar/NavbarMenu";
import { UnAuthRouter } from "./UnAuthRouter";
import { AddDomain } from "../Components/AddDomain/AddDomain";
export const AutRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="addDomain" element={<AddDomain />}></Route>
        <Route path="/*" element={<UnAuthRouter />}></Route>
      </Routes>
    </div>
  );
};

{
  /* <NavLink as={Link} to="/home" href="#home">
            Domarcas.com
          </NavLink.Brand> */
}
