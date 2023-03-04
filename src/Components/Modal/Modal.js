import React from "react";
import ReactDOM from "react-dom";
import { FormModal } from "../FormModal/FormModal";
import "../Modal/modal.css";

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
      <FormModal />
    </div>,
    document.getElementById("modal")
  );
};
