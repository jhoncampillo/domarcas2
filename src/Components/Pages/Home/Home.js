import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import background from "./Assets/bg-masthead.jpg";

export const Home = () => {
  const navigate = useNavigate();

  const handlePageDomain = () => {
    console.log("Cambio De pagina a portafolio");
    navigate("/portafolio");
  };

  return (
    <div>
      <div className="masthead">
        <h1 className="text-white font-weight-bold">Domarcas.com</h1>

        <div className="container px-2 px-lg-5 ">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h2 className="text-white font-weight-bold">
                Te ofrecemos gran variedad de Dominios para tu Negocio
              </h2>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white mb-5">
                Somos tus aliados en la proyeccion mundial de tu idea de negocio
              </p>
              <Button onClick={handlePageDomain} variant="secondary">
                Busca tu Domino
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
