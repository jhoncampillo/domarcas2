import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { Contacto } from "../Components/Pages/Contacto/Contacto";
import { Home } from "../Components/Pages/Home/Home";
import { Portafolio } from "../Components/Pages/Portafolio/Portafolio";
import { Qsomos } from "../Components/Pages/Qsomos/Qsomos";
import { ErrorPage } from "../Components/ErrorPage/ErrorPage";
import { NavbarMenu } from "../NavBar/NavbarMenu";

export const UnAuthRouter = () => {
  return (
    <>
      <NavbarMenu />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/qsomos" element={<Qsomos />} />
          <Route exact path="/portafolio" element={<Portafolio />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="*" element={<Home />} />
          {/* <Route exact path="*" element={<ErrorPage />} /> */}
        </Routes>
      </div>
    </>
  );
};
