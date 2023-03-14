import React from "react";
import { useNavigate } from "react-router-dom";

export const AddDomain = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container text-center">
      <div className="d-flex ">
        <div className="">
          <h1 style={{ color: "white" }}>Adicione Dominios a las DB</h1>
        </div>

        <div className=" ">
          <button className="btn btn-outline-primary mx-2" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between ">
        <button className="btn btn-outline-primary mx-2" onClick={onLogout}>
          Listar Dominio
        </button>
        <button className="btn btn-outline-primary mx-2" onClick={onLogout}>
          Agregar Dominio
        </button>
        <button className="btn btn-outline-primary mx-2" onClick={onLogout}>
          Eliminar Dominio
        </button>
        <button className="btn btn-outline-primary mx-2" onClick={onLogout}>
          Modificar Dominio
        </button>
      </div>
    </div>
  );
};
