import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { Contacto } from "../Components/Pages/Contacto/Contacto";
import { Home } from "../Components/Pages/Home/Home";
import { Portafolio } from "../Components/Pages/Portafolio/Portafolio";
import { Qsomos } from "../Components/Pages/Qsomos/Qsomos";
import { ErrorPage } from "../Components/ErrorPage/ErrorPage";
import { NavbarMenu } from "../NavBar/NavbarMenu";
//import { AutRouter } from "./Router/AutRouter";

export const UnAuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarMenu />}>
          <Route path="home" element={<Home />} />
          <Route path="qsomos" element={<Qsomos />} />
          <Route path="portafolio" element={<Portafolio />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </>
  );
};
