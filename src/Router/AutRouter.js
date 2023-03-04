import React from "react";
import { Login } from "../Components/Login/Login";
import { PortafolioAdmin } from "../Components/PortafoliAdmin/PortafolioAdmin";
import { UnAuthRouter } from "./unAuthRouter";

export const AutRouter = ({ children }) => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="*" element={<UnAuthRouter />}></Route>
      </Routes>
    </div>
  );
};
