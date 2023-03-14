import React, { useReducer, useContext } from "react";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import { MainContext } from "../Context/MainContext";
//import { Outlet } from "react-router-dom";
//import "../NavBar/NavBar.css";

export const NavbarMenu = () => {
  const { handleLogin, stateLogin } = useContext(MainContext);

  const navigateLogin = useNavigate();
  const handleAuth = () => {
    navigateLogin("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark  bg-dark p-2 mx-2">
        <Link
          className={({ isActive }) =>
            "nav-item nav-link mx-2" + (isActive ? "active" : " ")
          }
          to="/"
        >
          Domarcas.com
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-2" + (isActive ? "active" : " ")
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-2" + (isActive ? "active" : " ")
              }
              to="/qsomos"
            >
              Qsomos
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-2" + (isActive ? "active" : " ")
              }
              to="/portafolio"
            >
              Portafolio
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-2" + (isActive ? "active" : " ")
              }
              to="/contacto"
            >
              Contacto
            </NavLink>
          </div>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-primary">Jhon</span>
            {stateLogin ? (
              <button className="nav-item nav-link btn" onClick={handleAuth}>
                Login
              </button>
            ) : (
              <button className="nav-item nav-link btn" onClick={handleAuth}>
                Logout
              </button>
            )}
          </ul>
        </div>
      </nav>

      <section>
        <Outlet />
      </section>
    </>
  );
};
